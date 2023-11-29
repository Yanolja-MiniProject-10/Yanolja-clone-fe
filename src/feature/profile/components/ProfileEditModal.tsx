import { useRef, useState } from "react";
import * as style from "../styles/profileEditModal";
import * as commonStyle from "../../../components/loginModal/loginModal.styles";
import { ModalProps } from "../../../components/loginModal/loginModal.types";
import instance from "../../../api/instance";

const ProfileEditModal = ({ onClose }: ModalProps) => {
  const [name, setName] = useState("야놀자");
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  const handleEdit = async (name: string) => {
    try {
      const data = await instance.put("/users", {
        name: name,
      });
      if (data.status === 200) {
        alert("수정되었습니다.");
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <commonStyle.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <commonStyle.Modal>
        <div>
          <style.Form>
            <div>
              <label htmlFor="name">이름</label>
              <p>* 이름은 2글자 이상 10글자 이하로 입력해주세요.</p>
            </div>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </style.Form>

          <commonStyle.ButtonWrapper>
            <commonStyle.CancelButton type="button" onClick={onClose}>
              취소
            </commonStyle.CancelButton>
            <commonStyle.ConfirmButton type="button" onClick={() => handleEdit(name)}>
              완료
            </commonStyle.ConfirmButton>
          </commonStyle.ButtonWrapper>
        </div>
      </commonStyle.Modal>
    </commonStyle.ModalBackground>
  );
};

export default ProfileEditModal;
