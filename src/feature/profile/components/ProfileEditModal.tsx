import { useRef, useState } from "react";
import * as style from "../styles/profileEditModal";
import { ModalProps } from "../../../components/loginModal/loginModal.types";

const ProfileEditModal = ({ onClose }: ModalProps) => {
  const [name, setName] = useState("야놀자");
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  const handleEdit = () => {
    // 프로필 수정 로직
    console.log(name);
    onClose();
  };

  return (
    <style.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <style.Modal>
        <div>
          <style.Form onSubmit={handleEdit}>
            <div>
              <label htmlFor="name">이름</label>
              <p>* 이름은 2글자 이상 10글자 이하로 입력해주세요.</p>
            </div>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </style.Form>

          <style.ButtonWrapper>
            <style.CancelButton onClick={onClose}>취소</style.CancelButton>
            <style.ConfirmButton type="submit">완료</style.ConfirmButton>
          </style.ButtonWrapper>
        </div>
      </style.Modal>
    </style.ModalBackground>
  );
};

export default ProfileEditModal;
