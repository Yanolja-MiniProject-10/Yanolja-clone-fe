import { useState } from "react";
import RoomList from "./RoomList";
import CartModal from "./CartModal";
import { CartRoomProps, RoomOption } from "../cart.types";
import * as style from "../styles/cartRoom";
import { IoClose } from "react-icons/io5";

const CartRoom = ({ accomodations, setIsSelectAll }: CartRoomProps) => {
  const [selectedItem, setSelectedItem] = useState<RoomOption[] | []>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (roomOption: RoomOption[]) => {
    setSelectedItem([...roomOption]);
    setIsModalOpen(true);
  };

  return (
    <>
      {accomodations.map(accomodation => (
        <style.AccommodationList key={`accommodation-list-${accomodation.accommodationId}`}>
          <style.Accommodation>
            <style.AccommodationName>{accomodation.name}</style.AccommodationName>
            <style.AccommodationAddress>{accomodation.address}</style.AccommodationAddress>
          </style.Accommodation>

          {accomodation.roomOptions.map(roomOption => (
            <style.RoomOptionWrapper key={`room-option-${roomOption.roomOptionId}`}>
              <RoomList accomodations={accomodations} setIsSelectAll={setIsSelectAll} roomOption={roomOption} />

              <IoClose onClick={() => openModal([roomOption])} className="cart-cancel-btn" />
            </style.RoomOptionWrapper>
          ))}
        </style.AccommodationList>
      ))}

      {isModalOpen ? <CartModal selectedItem={selectedItem} setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
};

export default CartRoom;
