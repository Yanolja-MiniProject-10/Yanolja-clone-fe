import { Wrapper } from "../styles/accommodationRoomList";
import AccommodationRoomItem from "./AccommodationRoomItem";

/**나중에 실제 데이터 사용 */
const mockAccommodation = [
  {
    id: 1,
    name: "초특급대박대박슈퍼최고짱완전좋은방",
    description: "이 호텔은 오래되었습니다.",
    img: "https://yaimg.yanolja.com/v5/2023/11/01/12/1280/65423f2b0e6d61.93360681.jpg",
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
    description: "이 호텔은 오래되었습니다.",
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

const AccommodationRoomList = () => {
  return (
    <Wrapper>
      {mockAccommodation.map(v => (
        <AccommodationRoomItem
          key={v.id}
          id={v.id}
          name={v.name}
          img={v.img}
          checkIn={v.checkIn}
          checkOut={v.checkOut}
          price={v.price}
        />
      ))}
    </Wrapper>
  );
};

export default AccommodationRoomList;
