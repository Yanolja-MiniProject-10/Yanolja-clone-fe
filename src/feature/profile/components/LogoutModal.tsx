import { useRef } from "react";
import * as commonStyle from "../../../components/loginModal/loginModal.styles";
import { ModalProps } from "../../../components/loginModal/loginModal.types";
import * as style from "../styles/logoutModal";

const LogoutModal = ({ onClose, onConfirmLogout }: ModalProps) => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  return (
    <commonStyle.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <style.LogoutModal>
        <div>
          <style.Title>로그아웃 하시겠습니까?</style.Title>

          <style.LogoutButtonWrapper>
            <commonStyle.CancelButton onClick={onClose}>취소</commonStyle.CancelButton>
            <commonStyle.ConfirmButton onClick={onConfirmLogout}>로그아웃</commonStyle.ConfirmButton>
          </style.LogoutButtonWrapper>
        </div>
      </style.LogoutModal>
    </commonStyle.ModalBackground>
  );
};

export default LogoutModal;
