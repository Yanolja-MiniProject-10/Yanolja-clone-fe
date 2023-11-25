import {
  ModalWrapper,
  ModalInner,
  ModalContents,
  ModalRoomName,
  ModalQ,
  ModalBtns,
  ModalClose,
  ModalRoomDelete,
} from "../styles/cartModal";

const CartModal = ({ selectedItem, setSelectedItem, setIsModalOpen }) => {
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <ModalWrapper>
      <ModalInner>
        <ModalContents>
          <ModalQ>상품을 삭제하시겠습니까?</ModalQ>
          <ModalRoomName>{selectedItem?.name}</ModalRoomName>
        </ModalContents>

        <ModalBtns>
          <ModalClose onClick={closeModal}>아니요</ModalClose>

          <ModalRoomDelete
            onClick={() => {
              console.log("장바구니 삭제 API");
              closeModal();
            }}
          >
            삭제
          </ModalRoomDelete>
        </ModalBtns>
      </ModalInner>
    </ModalWrapper>
  );
};

export default CartModal;
