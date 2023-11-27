import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilState } from "recoil";
import { RoomListProps } from "../cart.types";
import * as style from "../styles/roomList";
import * as commonStyle from "../../../styles/checkbox";

const RoomList = ({ accomodations, setIsSelectAll, roomOption }: RoomListProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);

  // 체크 박스 선택 시
  const handleSelectItem = (roomId: number) => {
    const newRooms = [...checkedRooms];
    const index = newRooms.findIndex(item => item.roomOptionId === roomId);

    if (index === -1) {
      const selectedRoom = accomodations?.flatMap(room => room.roomOptions).find(item => item.roomOptionId === roomId);

      if (selectedRoom) {
        newRooms.push(selectedRoom);
      }
    } else {
      newRooms.splice(index, 1);
    }

    setCheckedRooms(newRooms);
    setIsSelectAll(newRooms.length === accomodations?.flatMap(room => room.roomOptions).length);
  };

  return (
    <>
      <commonStyle.Checkbox>
        <input
          type="checkbox"
          value={roomOption.roomOptionId}
          checked={checkedRooms.includes(roomOption)}
          onChange={() => handleSelectItem(roomOption.roomOptionId)}
          id={`room-checkbox-${roomOption.roomOptionId}`}
        />
        <label htmlFor={`room-checkbox-${roomOption.roomOptionId}`}></label>
      </commonStyle.Checkbox>

      <style.RoomOptions onClick={() => handleSelectItem(roomOption.roomOptionId)}>
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
