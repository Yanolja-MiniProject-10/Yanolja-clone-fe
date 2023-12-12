import { RoomListProps } from "./roomList.types";
import * as style from "./roomList.styles";

const RoomList = ({ roomOption }: RoomListProps) => {
  return (
    <style.RoomOptions>
      <style.RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" />

      <style.RoomOptionsText>
        <style.RoomOptionsName>{roomOption.name}</style.RoomOptionsName>
        <span>
          {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
        </span>
        <style.RoomOptionsCapacity>{roomOption.capacity} 인</style.RoomOptionsCapacity>
      </style.RoomOptionsText>

      <style.RoomOptionsPrice>
        {(roomOption.pricePerNight * roomOption.stayDuration).toLocaleString()} 원
      </style.RoomOptionsPrice>
    </style.RoomOptions>
  );
};

export default RoomList;
