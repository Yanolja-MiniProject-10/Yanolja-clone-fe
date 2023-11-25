import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilState } from "recoil";
import { RoomListProps } from "../cart.types";
import { Checkbox } from "../../../styles/checkbox";
import {
  RoomOptions,
  RoomOptionImg,
  RoomOptionsText,
  RoomOptionsName,
  RoomOptionsCapacity,
  RoomOptionsAmount,
} from "../styles/roomList";

const RoomList = ({ accomodations, setIsSelectAll, roomOption }: RoomListProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);

  // 체크 박스 선택 시
  const handleSelectItem = (roomId: number) => {
    const newRooms = [...checkedRooms];
    const index = newRooms.findIndex(item => item.roomOptionId === roomId);

    if (index === -1) {
      const selectedItem = accomodations?.flatMap(room => room.roomOptions).find(item => item.roomOptionId === roomId);

      if (selectedItem) {
        newRooms.push(selectedItem);
      }
    } else {
      newRooms.splice(index, 1);
    }

    setCheckedRooms(newRooms);
    setIsSelectAll(newRooms.length === accomodations?.flatMap(room => room.roomOptions).length);
  };

  return (
    <>
      <Checkbox>
        <input
          type="checkbox"
          value={roomOption.roomOptionId}
          checked={checkedRooms.includes(roomOption)}
          onChange={() => handleSelectItem(roomOption.roomOptionId)}
          id={`room-checkbox-${roomOption.roomOptionId}`}
        />
        <label htmlFor={`room-checkbox-${roomOption.roomOptionId}`}></label>
      </Checkbox>

      <RoomOptions onClick={() => handleSelectItem(roomOption.roomOptionId)}>
        <RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" />

        <RoomOptionsText>
          <RoomOptionsName>{roomOption.name}</RoomOptionsName>
          <span>
            {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
          </span>
          <RoomOptionsCapacity>{roomOption.capacity} 인</RoomOptionsCapacity>
        </RoomOptionsText>

        <RoomOptionsAmount>
          {(roomOption.pricePerNight * roomOption.stayDuration).toLocaleString()} 원
        </RoomOptionsAmount>
      </RoomOptions>
    </>
  );
};

export default RoomList;
