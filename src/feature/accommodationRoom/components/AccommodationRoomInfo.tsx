import Toast from "../../../components/Toast/Toast";
import { useRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomInfo";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { RoomInfoProps } from "../RoomInformation.types";

const AccommodationRoomInfo = ({ status, data }: RoomInfoProps) => {
  const [toast, setToast] = useRecoilState(toastState);
  const navigation = useNavigate();

  if (status == "pending") {
    return (
      <style.Wrapper>
        <Skeleton height={560} style={{ zIndex: 0 }} />
        <style.TextInfo>
          <Skeleton height={30} width={200} />
          <Skeleton width={300} height={15} />
          <Skeleton width={100} height={15} />
          <style.DivideLine />
          <style.StaticDesc>상세 소개</style.StaticDesc>
          <Skeleton />
          <Skeleton />
          <Skeleton width={200} />
        </style.TextInfo>
      </style.Wrapper>
    );
  } else if (status == "error") {
    window.alert("잘못된 접근입니다. 메인 페이지로 이동합니다.");
    navigation("/");
    return null;
  } else {
    const room = data.data;
    const availableRoomCount = room.totalRoomCount - room.reservedRoomCount;
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
          {availableRoomCount > 0 && <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>}
          <style.RoomPrice>
            {room.totalPrice.toLocaleString()} 원 / {room.stayDuration}박
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
  }
};

export default AccommodationRoomInfo;
