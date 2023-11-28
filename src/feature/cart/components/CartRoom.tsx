import { useState } from "react";
import RoomList from "./RoomList";
import CartModal from "./CartModal";
import { RoomOption } from "../../../types";
import { CartRoomProps } from "../cart.types";
import * as style from "../styles/cartRoom";
import { IoClose } from "react-icons/io5";

const CartRoom = ({ accommodations, setIsSelectAll }: CartRoomProps) => {
  const [selectedRooms, setSelectedRooms] = useState<RoomOption[] | []>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (roomOption: RoomOption[]) => {
    setSelectedRooms([...roomOption]);
    setIsModalOpen(true);
  };

  return (
    <>
      {accommodations.map(accommodation => (
        <style.AccommodationList key={`accommodation-list-${accommodation.accommodationId}`}>
          <style.Accommodation>
            <style.AccommodationName>{accommodation.name}</style.AccommodationName>
            <style.AccommodationAddress>{accommodation.address}</style.AccommodationAddress>
          </style.Accommodation>

          {accommodation.roomOptions.map(roomOption => (
            <style.RoomOptionWrapper key={`room-option-${roomOption.cartProductId}`}>
              <RoomList accommodations={accommodations} setIsSelectAll={setIsSelectAll} roomOption={roomOption} />

              <IoClose onClick={() => openModal([roomOption])} className="cart-cancel-btn" />
            </style.RoomOptionWrapper>
          ))}
        </style.AccommodationList>
      ))}

      {isModalOpen ? <CartModal selectedRooms={selectedRooms} setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
};

export default CartRoom;
