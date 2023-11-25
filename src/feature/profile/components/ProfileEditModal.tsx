import { useRef, useState } from "react";
import { ButtonWrapper, CancelButton, ConfirmButton, Form, Modal, ModalBackground } from "../styles/profileEditModal";

const ProfileEditModal = ({ onClose }) => {
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
    <ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <Modal>
        <div>
          <Form onSubmit={handleEdit}>
            <div>
              <label htmlFor="name">이름</label>
              <p>* 이름은 2글자 이상 10글자 이하로 입력해주세요.</p>
            </div>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </Form>

          <ButtonWrapper>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <ConfirmButton type="submit">완료</ConfirmButton>
          </ButtonWrapper>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default ProfileEditModal;