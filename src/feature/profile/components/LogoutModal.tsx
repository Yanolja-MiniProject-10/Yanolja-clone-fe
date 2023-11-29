import { useRef } from "react";
import { ModalProps } from "../../../components/loginModal/loginModal.types";
import * as style from "../styles/logoutModal";
import * as commonStyle from "../../../components/loginModal/loginModal.styles";

const LogoutModal = ({ onClose, onConfirmLogout }: ModalProps) => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  return (
    <commonStyle.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <commonStyle.Modal>
        <div>
          <style.Title>로그아웃 하시겠습니까?</style.Title>

          <commonStyle.ButtonWrapper>
            <commonStyle.CancelButton onClick={onClose}>취소</commonStyle.CancelButton>
            <commonStyle.ConfirmButton onClick={onConfirmLogout}>로그아웃</commonStyle.ConfirmButton>
          </commonStyle.ButtonWrapper>
        </div>
      </commonStyle.Modal>
    </commonStyle.ModalBackground>
  );
};

export default LogoutModal;
