import { useNavigate } from "react-router-dom";
import * as style from "./loginModal.styles";
import { ModalProps } from "./loginModal.types";

const LoginModal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  return (
    <style.ModalBackground>
      <style.Modal>
        <div>
          <style.Title>
            <p>로그인이 필요합니다.</p>
            <p>로그인 페이지로 이동하시겠습니까?</p>
          </style.Title>
          <style.ButtonWrapper>
            <style.CancelButton type="button" onClick={onClose}>
              취소
            </style.CancelButton>
            <style.ConfirmButton type="button" onClick={() => navigate("/login")}>
              확인
            </style.ConfirmButton>
          </style.ButtonWrapper>
        </div>
      </style.Modal>
    </style.ModalBackground>
  );
};

export default LoginModal;
