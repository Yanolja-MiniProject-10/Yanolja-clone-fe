import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilState } from "recoil";
import { RoomListProps } from "../cart.types";
import * as style from "../styles/roomList";
import * as commonStyle from "../../../styles/checkbox";

const RoomList = ({ accommodations, setIsSelectAll, roomOption }: RoomListProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);

  // 체크 박스 선택 시
  const handleSelectRoom = (roomId: number) => {
    const newRooms = [...checkedRooms];
    const index = newRooms.findIndex(roomOption => roomOption.cartProductId === roomId);

    if (index === -1) {
      const selectedRoom = accommodations
        ?.flatMap(accommodation => accommodation.roomOptions)
        .find(roomOption => roomOption.cartProductId === roomId);

      if (selectedRoom) {
        newRooms.push(selectedRoom);
      }
    } else {
      newRooms.splice(index, 1);
    }

    setCheckedRooms(newRooms);
    setIsSelectAll(newRooms.length === accommodations?.flatMap(accommodation => accommodation.roomOptions).length);
  };

  return (
    <>
      <commonStyle.Checkbox>
        <input
          type="checkbox"
          value={roomOption.cartProductId}
          checked={checkedRooms.includes(roomOption)}
          onChange={() => handleSelectRoom(roomOption.cartProductId)}
          id={`room-checkbox-${roomOption.cartProductId}`}
        />
        <label htmlFor={`room-checkbox-${roomOption.cartProductId}`}></label>
      </commonStyle.Checkbox>

      <style.RoomOptions onClick={() => handleSelectRoom(roomOption.cartProductId)}>
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
    </>
  );
};

export default RoomList;
