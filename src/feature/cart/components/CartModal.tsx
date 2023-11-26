import { useQueryClient } from "@tanstack/react-query";
import { useDeleteCarts } from "../hooks/queries/useDeleteCarts";
import { CartModalProps } from "../cart.types";
import * as style from "../styles/cartModal";

const CartModal = ({ selectedRooms, setIsModalOpen }: CartModalProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteCartRooms } = useDeleteCarts(queryClient);

  const handleDeleteCartRooms = async () => {
    try {
      deleteCartRooms(selectedRooms);
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <style.ModalWrapper>
      <style.ModalInner>
        <style.ModalContents>
          <style.ModalQ>선택 숙소를 삭제하시겠습니까?</style.ModalQ>
          <style.ModalRoomName>
            {selectedRooms.map((selectedRoom, index) => (
              <span key={`modal-room-name-${index}`}>{selectedRoom.name}</span>
            ))}
          </style.ModalRoomName>
        </style.ModalContents>

        <style.ModalBtns>
          <style.ModalClose onClick={closeModal}>아니요</style.ModalClose>

          <style.ModalRoomDelete onClick={handleDeleteCartRooms}>삭제</style.ModalRoomDelete>
        </style.ModalBtns>
      </style.ModalInner>
    </style.ModalWrapper>
  );
};

export default CartModal;
