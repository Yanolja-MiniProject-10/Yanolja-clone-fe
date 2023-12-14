import Toast from "../../../components/toast/Toast";
import { useRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { RoomInfoProps } from "../RoomInformation.types";
import { useRecoilValue } from "recoil";
import { accommodationMemberState } from "../../../recoil/accommodationMember";

const AccommodationRoomInfo = ({ data }: RoomInfoProps) => {
  const [toast, setToast] = useRecoilState(toastState);

  const { guest } = useRecoilValue(accommodationMemberState);

  const room = data.data;
  const availableRoomCount = room.totalRoomCount - room.reservedRoomCount;
  const isRoomAvailable = availableRoomCount > 0;
  const isAvailableGuest = guest <= room.capacity;

  return (
    <style.Wrapper>
      <style.RoomImgWrapper>
        {room.roomOptionImage.mainImageUrls.length > 1 ? (
          <Swiper
            style={{ zIndex: 0 }}
            slidesPerView={1}
            navigation={true}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
          >
            {room.roomOptionImage.mainImageUrls.map((img, index) => (
              <SwiperSlide key={index}>
                <style.RoomImg src={img} alt={room.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <style.RoomImg src={room.roomOptionImage.mainImageUrls[0]} alt={room.name} />
        )}
      </style.RoomImgWrapper>
      <style.TextInfo>
        <style.RoomName>{room.name}</style.RoomName>
        <style.RoomCheckInOut>
          <style.RoomCheckIn>
            <span>체크인: </span>
            {room.checkInTime.slice(0, 5)}
          </style.RoomCheckIn>
          <span>~</span>
          <style.RoomCheckOut>
            <span>체크아웃: </span>
            {room.checkOutTime.slice(0, 5)}
          </style.RoomCheckOut>
        </style.RoomCheckInOut>
        {isRoomAvailable ? (
          <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>
        ) : (
          <style.NoAvailableRoom>* 예약이 마감되었습니다.</style.NoAvailableRoom>
        )}
        {isAvailableGuest ? (
          <style.CapacityWrapper>
            <style.GuestIcon />
            <style.GuestNumber>인원: {room.capacity}인</style.GuestNumber>
          </style.CapacityWrapper>
        ) : (
          <style.CapacityWrapper>
            <style.GuestIcon />
            <style.GuestNumber>인원: {room.capacity}인</style.GuestNumber>
            <style.NoAvailableRoom>* 선택하신 인원으로 이용 불가능한 객실입니다.</style.NoAvailableRoom>
          </style.CapacityWrapper>
        )}
        <style.RoomPrice>
          {room.totalPrice.toLocaleString()}원 / {room.stayDuration}박
        </style.RoomPrice>
        <style.DivideLine />
        <style.RoomStaticDescWrap>
          <style.StaticDesc>상세 소개</style.StaticDesc>
          <style.RoomDesc>{room.description}</style.RoomDesc>
        </style.RoomStaticDescWrap>
      </style.TextInfo>
      {toast.open && <Toast setToast={setToast} />}
    </style.Wrapper>
  );
};

export default AccommodationRoomInfo;
