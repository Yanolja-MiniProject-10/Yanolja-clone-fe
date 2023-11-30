import { useNavigate } from "react-router-dom";
import * as style from "./loginModal.styles";
import { ModalProps } from "./loginModal.types";
import { useRef } from "react";

const LoginModal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  return (
    <style.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
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
