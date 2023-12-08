import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomItem";
import { RoomListProps } from "../accommodationInformation.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQueryClient } from "@tanstack/react-query";
import { usePostCart } from "../hooks/queries/addCartData";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import { postReservation } from "../api";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../recoil/userData";
import { useState } from "react";
import LoginModal from "../../../components/loginModal/LoginModal";
import axios from "axios";

const AccommodationRoomItem = ({
  id,
  name,
  roomOptionImage,
  checkInTime,
  checkOutTime,
  totalPrice,
  accommodationId,
  stayDuration,
  totalRoomCount,
  reservedRoomCount,
  capacity,
}: RoomListProps) => {
  const [user, setUser] = useRecoilState(userState);

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  const setToast = useSetRecoilState(toastState);
  const availableRoomCount = totalRoomCount - reservedRoomCount;
  const isAvailableDate = availableRoomCount > 0;

  const queryClient = useQueryClient();
  const { mutateAsync: postCart } = usePostCart(queryClient);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  const navigation = useNavigate();

  const isAvailableGuest = guest <= capacity;

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  const handleAddCart = async () => {
    try {
      await postCart({
        roomOptionId: id,
        numberOfGuest: guest,
        reservationStartDate,
        reservationEndDate,
        stayDuration,
      });
      setToast({ open: true, message: "장바구니에 상품이 담겼습니다." });
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        if (e.response.status === 405 || e.response.status === 401) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          setIsLoginModal(true);
        } else {
          console.error(e.response);
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigation("/");
      }
    }
  };

  const postReservationInstant = async () => {
    try {
      const data = await postReservation(id, guest, reservationStartDate, reservationEndDate, stayDuration);
      const cartId = data.data.cartId;
      const cartProducts = [data.data.accommodations[0].roomOptions[0].cartProductId];

      navigation("/reservation", {
        state: {
          cartId,
          cartProducts,
        },
      });
    } catch (e) {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
    }
  };

  return (
    <>
      <style.Box>
        <style.RoomImgWrapper>
          {roomOptionImage.mainImageUrls.length > 1 ? (
            <Swiper
              style={{ zIndex: 0 }}
              slidesPerView={1}
              navigation={true}
              loop={true}
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
            >
              {roomOptionImage.mainImageUrls.map((img, index) => (
                <SwiperSlide key={index}>
                  <style.RoomImg src={img} alt={name} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <style.RoomImg src={roomOptionImage.mainImageUrls[0]} alt={name} />
          )}
        </style.RoomImgWrapper>
        <style.RoomInfo>
          <style.RoomTopWrapper>
            <style.RoomName>{name.length >= 16 ? name.slice(0, 15) + "..." : name}</style.RoomName>
            <Link to={`/accommodation/${accommodationId}/room/${id}`}>
              <style.RoomDetailButton>상세보기 {">"}</style.RoomDetailButton>
            </Link>
          </style.RoomTopWrapper>
          <style.RoomCheckInOut>
            체크인: {checkInTime.slice(0, 5)} ~ 체크아웃: {checkOutTime.slice(0, 5)}
          </style.RoomCheckInOut>
          <style.RoomPrice>
            {totalPrice.toLocaleString()}원 / {stayDuration}박
          </style.RoomPrice>
          {isAvailableGuest ? (
            <style.CapacityWrapper>
              <style.GuestIcon />
              <style.GuestNumber>인원: {capacity}인</style.GuestNumber>
            </style.CapacityWrapper>
          ) : (
            <style.CapacityWrapper>
              <style.GuestIcon />
              <style.GuestNumber>인원: {capacity}인</style.GuestNumber>
              <style.NoAvailableRoom>* 선택하신 인원으로 이용이 불가능합니다.</style.NoAvailableRoom>
            </style.CapacityWrapper>
          )}
          <style.BottomWrapper>
            {isAvailableDate ? (
              <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>
            ) : (
              <style.NoAvailableRoom>* 예약이 마감되었습니다.</style.NoAvailableRoom>
            )}
            {isAvailableDate && isAvailableGuest ? (
              <style.ButtonWrapper>
                <style.CartButton
                  onClick={() => {
                    user.accessToken ? handleAddCart() : setIsLoginModal(true);
                  }}
                >
                  <style.CartIcon />
                </style.CartButton>
                <style.ReservationButton
                  onClick={() => {
                    user.accessToken ? postReservationInstant() : setIsLoginModal(true);
                  }}
                >
                  예약하기
                </style.ReservationButton>
              </style.ButtonWrapper>
            ) : (
              <style.ButtonWrapper>
                <style.DisableCartButton>
                  <style.DisableCartIcon />
                </style.DisableCartButton>
                <style.DisableReservationButton>예약불가</style.DisableReservationButton>
              </style.ButtonWrapper>
            )}
          </style.BottomWrapper>
        </style.RoomInfo>
      </style.Box>

      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default AccommodationRoomItem;
