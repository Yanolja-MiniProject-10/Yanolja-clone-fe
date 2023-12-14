import { useState } from "react";
import { checkedCartRooms } from "../recoil/checkedCartRooms";
import { useRecoilState } from "recoil";
import CartModal from "./CartModal";
import RoomList from "../../../components/roomList/RoomList";
import { RoomOption } from "../../../types";
import { CartRoomProps } from "../cart.types";
import * as commonStyle from "../../../styles/checkbox";
import * as style from "../styles/cartRoom";

const CartRoom = ({ accommodations, setIsSelectAll }: CartRoomProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);
  const [selectedRooms, setSelectedRooms] = useState<RoomOption[] | []>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 체크 박스 선택 시
  const handleSelectRoom = (roomId: number) => {
    const newRooms = [...checkedRooms];
    const index = newRooms.findIndex(roomOption => roomOption.cartProductId === roomId);

    if (index === -1) {
      const selectedRoom = accommodations
        .flatMap(accommodation => accommodation.roomOptions)
        .find(roomOption => roomOption.cartProductId === roomId);

      if (selectedRoom) {
        newRooms.push(selectedRoom);
      }
    } else {
      newRooms.splice(index, 1);
    }

    setCheckedRooms(newRooms);
    setIsSelectAll(newRooms.length === accommodations.flatMap(accommodation => accommodation.roomOptions).length);
  };

  const openModal = (roomOption: RoomOption[]) => {
    setSelectedRooms([...roomOption]);
    setIsModalOpen(true);
  };

  return (
    <style.CartList>
      {accommodations.map(accommodation => (
        <style.AccommodationList key={`accommodation-list-${accommodation.accommodationId}`}>
          <style.Accommodation href={"/accommodation/" + accommodation.accommodationId}>
            <style.AccommodationName>{accommodation.name}</style.AccommodationName>
            <style.AccommodationAddress>{accommodation.address}</style.AccommodationAddress>
          </style.Accommodation>

          {accommodation.roomOptions.map(roomOption => (
            <style.RoomOptionWrapper key={`room-option-${roomOption.cartProductId}`}>
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

              <RoomList roomOption={roomOption} />
              <style.CartCancelBtn onClick={() => openModal([roomOption])} />
            </style.RoomOptionWrapper>
          ))}
        </style.AccommodationList>
      ))}

      {isModalOpen ? <CartModal selectedRooms={selectedRooms} setIsModalOpen={setIsModalOpen} /> : null}
    </style.CartList>
  );
};

export default CartRoom;
