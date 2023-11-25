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

const AccommodationRoomInfo = ({ status, data, error }) => {
  const [toast, setToast] = useRecoilState(toastState);

  if (status == "pending") {
    return (
      <style.Wrapper>
        <Skeleton height={560} />
        <style.TextInfo>
          <Skeleton height={30} width={200} />
          <Skeleton width={300} height={25} />
          <style.DivideLine />
          <style.StaticDesc>상세 소개</style.StaticDesc>
          <Skeleton />
          <Skeleton />
          <Skeleton width={200} />
        </style.TextInfo>
      </style.Wrapper>
    );
  } else if (status == "error") {
    console.log(error.message);
  } else {
    const room = data.data;
    return (
      <style.Wrapper>
        {room.roomOptionImage.mainImageUrls.length > 1 ? (
          <Swiper
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
          <style.RoomImg src={room.img} alt={room.name} />
        )}
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
