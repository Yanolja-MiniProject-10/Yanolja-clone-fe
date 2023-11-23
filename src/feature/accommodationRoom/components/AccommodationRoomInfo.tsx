import { useParams } from "react-router-dom";
import Toast from "../../../components/Toast/Toast";
import { useRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**나중에 실제 데이터 사용 */
const mockAccommodation = [
  {
    id: 1,
    name: "초특급대박대박슈퍼최고짱완전좋은방",
    description: "이 호텔은 오래되었습니다.",
    img: [
      "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
      "https://yaimg.yanolja.com/v5/2022/10/20/13/1280/63514b13bb9288.13141700.jpg",
    ],
    checkIn: "15:00",
    checkOut: "11:00",
    price: 250000,
  },
  {
    id: 2,
    name: "룸2",
    description: "이 호텔은 오래되었습니다.",
    img: "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
    checkIn: "15:00",
    checkOut: "11:00",
    price: 250000,
  },
  {
    id: 3,
    name: "룸3",
    description: "이 호텔은 짱 많이 오래되었습니다.",
    img: "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
    checkIn: "15:00",
    checkOut: "11:00",
    price: 250000,
  },
  {
    id: 4,
    name: "룸4",
    description: "이 호텔은 오래되었습니다.",
    img: "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
    checkIn: "15:00",
    checkOut: "11:00",
    price: 250000,
  },
  {
    id: 5,
    name: "룸5",
    description: "이 호텔은 오래되었습니다.",
    img: "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
    checkIn: "15:00",
    checkOut: "11:00",
    price: 250000,
  },
];

const AccommodationRoomInfo = () => {
  const [toast, setToast] = useRecoilState(toastState);

  /**url 데이터 받아올 때 수정 */
  const { id } = useParams();
  const room = mockAccommodation.find(v => v.id == parseInt(id as string));

  {
    /** 나중에 room 타입 확실히 지정한 후 삭제 예정 */
  }
  if (!room) {
    return <div>Room not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    draggable: false,
    initialSlide: 0,
    prevArrow: <style.CustomPrevArrow />,
    nextArrow: <style.CustomNextArrow />,
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 840, // (숫자)px 이하일 경우
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <style.Wrapper>
      <Slider {...settings}>
        {Array.isArray(room.img) ? (
          room.img.map((img, index) => <style.RoomImg key={index} src={img} alt={room.name} />)
        ) : (
          <style.RoomImg src={room.img} alt={room.name} />
        )}
      </Slider>
      <style.TextInfo>
        <style.RoomName>{room.name}</style.RoomName>
        <style.RoomCheckInOut>
          <style.RoomCheckIn>
            <span>체크인: </span>
            {room.checkIn}
          </style.RoomCheckIn>
          <span>~</span>
          <style.RoomCheckOut>
            <span>체크아웃: </span>
            {room.checkOut}
          </style.RoomCheckOut>
        </style.RoomCheckInOut>
        <style.RoomPrice> {room.price} 원</style.RoomPrice>
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
