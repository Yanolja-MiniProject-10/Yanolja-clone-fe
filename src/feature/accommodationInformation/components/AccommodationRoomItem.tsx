import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import * as style from "../styles/accommodationRoomItem";
import { RoomListProps } from "../accommodationInformation.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import CartButton from "./CartButton";
import ReservationButton from "./ReservationButton";

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
  const availableRoomCount = totalRoomCount - reservedRoomCount;
  const isAvailableDate = availableRoomCount > 0;

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  const isAvailableGuest = guest <= capacity;

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

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
          <style.ButtonWrapper>
            {isAvailableDate && isAvailableGuest ? (
              <>
                <CartButton
                  roomOptionId={id}
                  numberOfGuest={guest}
                  reservationStartDate={reservationStartDate}
                  reservationEndDate={reservationEndDate}
                  stayDuration={stayDuration}
                  available={true}
                />
                <ReservationButton
                  id={id}
                  guest={capacity}
                  reservationStartDate={reservationStartDate}
                  reservationEndDate={reservationEndDate}
                  stayDuration={stayDuration}
                  available={true}
                  text="예약하기"
                />
              </>
            ) : (
              <>
                <CartButton
                  roomOptionId={id}
                  numberOfGuest={guest}
                  reservationStartDate={reservationStartDate}
                  reservationEndDate={reservationEndDate}
                  stayDuration={stayDuration}
                  available={false}
                />
                <ReservationButton
                  available={false}
                  id={id}
                  guest={capacity}
                  reservationStartDate={reservationStartDate}
                  reservationEndDate={reservationEndDate}
                  stayDuration={stayDuration}
                  text="예약불가"
                />
              </>
            )}
          </style.ButtonWrapper>
        </style.BottomWrapper>
      </style.RoomInfo>
    </style.Box>
  );
};

export default AccommodationRoomItem;
