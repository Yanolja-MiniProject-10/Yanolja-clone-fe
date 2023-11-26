import { useNavigate } from "react-router-dom";
import { ButtonWrapper, CancelButton, ConfirmButton, Modal, ModalBackground, Title } from "./loginModal.styles";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <ModalBackground>
      <Modal>
        <div>
          <Title>
            <p>로그인이 필요합니다.</p>
            <p>로그인 페이지로 이동하시겠습니까?</p>
          </Title>
          <ButtonWrapper>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <ConfirmButton type="button" onClick={() => navigate("/login")}>
              확인
            </ConfirmButton>
          </ButtonWrapper>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default LoginModal;
