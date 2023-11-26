import { CartModalProps } from "../cart.types";
import * as style from "../styles/cartModal";

const CartModal = ({ selectedItem, setIsModalOpen }: CartModalProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <style.ModalWrapper>
      <style.ModalInner>
        <style.ModalContents>
          <style.ModalQ>선택 숙소를 삭제하시겠습니까?</style.ModalQ>
          <style.ModalRoomName>
            {selectedItem.map((selectedItems, index) => (
              <span key={`modal-room-name-${index}`}>{selectedItems.name}</span>
            ))}
          </style.ModalRoomName>
        </style.ModalContents>

        <style.ModalBtns>
          <style.ModalClose onClick={closeModal}>아니요</style.ModalClose>

          <style.ModalRoomDelete
            onClick={() => {
              console.log("장바구니 삭제 API");
              closeModal();
            }}
          >
            삭제
          </style.ModalRoomDelete>
        </style.ModalBtns>
      </style.ModalInner>
    </style.ModalWrapper>
  );
};

export default CartModal;
