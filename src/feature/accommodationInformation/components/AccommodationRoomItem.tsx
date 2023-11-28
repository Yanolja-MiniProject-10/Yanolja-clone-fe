import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
}: RoomListProps) => {
  const setToast = useSetRecoilState(toastState);
  const availableRoomCount = totalRoomCount - reservedRoomCount;

  const queryClient = useQueryClient();
  const { mutateAsync: postCart } = usePostCart(queryClient);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  const navigation = useNavigate();

  /**나중에 로직 수정 예정 */
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
      alert(`장바구니에 상품 담기를 실패했습니다.`);
      console.log(e);
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
      console.log(e);
    }
  };

  return (
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
        {availableRoomCount > 0 && <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>}
        <style.ButtonWraper>
          <style.CartButton onClick={() => handleAddCart()}>
            <style.CartIcon />
          </style.CartButton>
          <style.ReservationButton
            onClick={() => {
              postReservationInstant();
            }}
          >
            예약하기
          </style.ReservationButton>
        </style.ButtonWraper>
      </style.RoomInfo>
    </style.Box>
  );
};

export default AccommodationRoomItem;
