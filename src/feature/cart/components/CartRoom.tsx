import { useState } from "react";
import RoomList from "./RoomList";
import CartModal from "./CartModal";
import { CartListProps, RoomOption } from "../cart.types";
import {
  AccommodationList,
  Accommodation,
  AccommodationName,
  AccommodationAddress,
  RoomOptionWrapper,
} from "../styles/cartRoom";
import { IoClose } from "react-icons/io5";

const CartRoom = ({ accomodations, setIsSelectAll }: CartListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RoomOption | null>(null);

  const openModal = (roomOption: RoomOption) => {
    setSelectedItem(roomOption);
    setIsModalOpen(true);
  };

  return (
    <>
      {accomodations.map(accomodation => (
        <AccommodationList key={`accommodation-list-${accomodation.accommodationId}`}>
          <Accommodation>
            <AccommodationName>{accomodation.name}</AccommodationName>
            <AccommodationAddress>{accomodation.address}</AccommodationAddress>
          </Accommodation>

          {accomodation.roomOptions.map(roomOption => (
            <RoomOptionWrapper key={`room-option-${roomOption.roomOptionId}`}>
              <RoomList accomodations={accomodations} setIsSelectAll={setIsSelectAll} roomOption={roomOption} />

              <IoClose onClick={() => openModal(roomOption)} className="cart-cancel-btn" />
            </RoomOptionWrapper>
          ))}
        </AccommodationList>
      ))}

      {isModalOpen ? (
        <CartModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} setIsModalOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

export default CartRoom;
