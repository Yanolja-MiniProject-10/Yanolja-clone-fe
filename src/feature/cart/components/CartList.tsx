import { useState } from "react";
import { CartListProps, RoomOption } from "../cart.types";
import { AccommodationList, Accommodation, RoomContents, RoomTextContent, ModalWrapper } from "../styles/cartList";

const CartList = ({ rooms, setIsSelectAll, selectedRooms, setSelectedRooms }: CartListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RoomOption | null>(null);

  const openModal = (roomOption: RoomOption) => {
    setSelectedItem(roomOption);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleSelectItem = (roomId: number) => {
    const newRooms = [...selectedRooms];
    const index = newRooms.findIndex(item => item.roomOptionId === roomId);

    if (index === -1) {
      const selectedItem = rooms?.flatMap(room => room.roomOptions).find(item => item.roomOptionId === roomId);

      if (selectedItem) {
        newRooms.push(selectedItem);
      }
    } else {
      newRooms.splice(index, 1);
    }

    setSelectedRooms(newRooms);
    setIsSelectAll(newRooms.length === rooms?.flatMap(room => room.roomOptions).length);
  };

  return (
    <>
      {rooms.map(room => (
        <AccommodationList key={room.accommodationId}>
          <li>
            <Accommodation>
              <span className="room-name">{room.name}</span>
              <span className="room-address">{room.address}</span>
            </Accommodation>

            {room.roomOptions.map(roomOption => (
              <RoomContents key={roomOption.roomOptionId}>
                <input
                  type="checkbox"
                  value={roomOption.roomOptionId}
                  checked={selectedRooms.includes(roomOption)}
                  onChange={() => handleSelectItem(roomOption.roomOptionId)}
                  id={`room-checkbox-${roomOption.roomOptionId}`}
                />
                <label htmlFor={`room-checkbox-${roomOption.roomOptionId}`}></label>

                <div className="room-contents" onClick={() => handleSelectItem(roomOption.roomOptionId)}>
                  <img src={roomOption.thumbnailImage} alt="숙소 사진" />

                  <RoomTextContent>
                    <span className="room-option-name">{roomOption.name}</span>
                    <span className="room-option-date">
                      {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
                    </span>
                    <span className="room-option-capacity">{roomOption.capacity} 인</span>
                  </RoomTextContent>

                  <span className="room-option-pay-amount">{roomOption.paymentAmount} 원</span>
                </div>

                <button onClick={() => openModal(roomOption)} className="cart-cancel-btn">
                  X
                </button>
              </RoomContents>
            ))}
          </li>
        </AccommodationList>
      ))}

      {isModalOpen && (
        <ModalWrapper>
          <div className="modal-inner">
            <div className="modal-contents">
              <span className="modal-room-name">{selectedItem?.name}</span>
              <span>상품을 삭제하시겠습니까?</span>
            </div>

            <div className="modal-btns">
              <button onClick={closeModal} className="modal-close">
                아니요
              </button>

              <button
                onClick={() => {
                  console.log("장바구니 삭제 API");
                  closeModal();
                }}
                className="modal-room-delete"
              >
                삭제
              </button>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default CartList;
