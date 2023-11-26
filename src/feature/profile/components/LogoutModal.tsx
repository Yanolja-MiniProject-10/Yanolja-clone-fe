import { useRef } from "react";
import { CancelButton, ConfirmButton, Modal, ModalBackground } from "../styles/profileEditModal";
import { StyledButtonWrapper, Title } from "../styles/logoutModal";
import { ModalProps } from "../../../components/loginModal/loginModal.types";

const LogoutModal = ({ onClose, onConfirmLogout }: ModalProps) => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };
  return (
    <ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <Modal>
        <Title>로그아웃 하시겠습니까?</Title>

        <StyledButtonWrapper>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirmLogout}>로그아웃</ConfirmButton>
        </StyledButtonWrapper>
      </Modal>
    </ModalBackground>
  );
};

export default LogoutModal;
