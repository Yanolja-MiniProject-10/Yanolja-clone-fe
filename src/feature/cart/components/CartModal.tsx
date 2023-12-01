import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteCarts } from "../hooks/queries/useDeleteCarts";
import { CartModalProps } from "../cart.types";
import * as style from "../styles/cartModal";

const CartModal = ({ selectedRooms, setIsModalOpen }: CartModalProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteCartRooms, status } = useDeleteCarts(queryClient);
  const navigation = useNavigate();

  if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

  const handleDeleteCartRooms = async () => {
    try {
      await deleteCartRooms(selectedRooms);
      closeModal();
    } catch (e) {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
      return null;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInnerClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <style.ModalWrapper onClick={closeModal}>
      <style.ModalInner onClick={handleInnerClick}>
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
