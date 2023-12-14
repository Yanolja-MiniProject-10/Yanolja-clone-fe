import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteCarts } from "../hooks/queries/useDeleteCarts";
import { CartModalProps } from "../cart.types";
import * as style from "../styles/cartModal";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/userData";

const CartModal = ({ selectedRooms, setIsModalOpen }: CartModalProps) => {
  const setUser = useSetRecoilState(userState);

  const queryClient = useQueryClient();
  const { mutateAsync: deleteCartRooms } = useDeleteCarts(queryClient);
  const navigation = useNavigate();

  const handleDeleteCartRooms = async () => {
    try {
      await deleteCartRooms(selectedRooms);
      closeModal();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401 || error.response.status === 405) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          window.alert("인증 오류가 발생했습니다. 로그인을 다시 해주세요.");
          navigation("/login");
        } else {
          window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
          navigation("/");
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigation("/");
      }
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
