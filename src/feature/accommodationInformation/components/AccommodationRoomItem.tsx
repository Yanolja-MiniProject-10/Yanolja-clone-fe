import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomItem";
import { RoomListProps } from "../accommodationInformation.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**실제 데이터 받아올 때 타입 지정해줘야 함 */
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

  return (
    <style.Box>
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
      <style.RoomInfo>
        <style.RoomTopWrapper>
          <style.RoomName>{name.length >= 16 ? name.slice(0, 15) + "..." : name}</style.RoomName>
          <Link to={`/accommodation/${accommodationId}/room/${id}`}>
            <style.RoomDetailButton>상세보기 {">"}</style.RoomDetailButton>
          </Link>
        </style.RoomTopWrapper>
        <style.RoomCheckInOut>
          <style.RoomCheckIn>
            <span>체크인: </span>
            {checkInTime.slice(0, 5)}
          </style.RoomCheckIn>
          <span>~</span>
          <style.RoomCheckOut>
            <span>체크아웃: </span>
            {checkOutTime.slice(0, 5)}
          </style.RoomCheckOut>
        </style.RoomCheckInOut>
        <style.RoomPrice>
          {totalPrice.toLocaleString()}원 / {stayDuration}박
        </style.RoomPrice>
        {availableRoomCount > 0 && <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>}
        <style.ButtonWraper>
          <style.CartButton onClick={() => setToast({ open: true, message: "장바구니에 상품이 담겼습니다." })}>
            <style.CartIcon />
          </style.CartButton>
          <Link to="/reservation">
            <style.ReservationButton>예약하기</style.ReservationButton>
          </Link>
        </style.ButtonWraper>
      </style.RoomInfo>
    </style.Box>
  );
};

export default AccommodationRoomItem;
