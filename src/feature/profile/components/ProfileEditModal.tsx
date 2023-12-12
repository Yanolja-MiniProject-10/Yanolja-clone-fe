import { useRef, useState } from "react";
import * as commonStyle from "../../../components/loginModal/loginModal.styles";
import { ModalProps } from "../../../components/loginModal/loginModal.types";
import * as style from "../styles/profileEditModal";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/userData";
import authInstance from "../../../api/authInstance";
import axios from "axios";

const ProfileEditModal = ({ onClose, userName, onNameUpdated }: ModalProps) => {
  const [user, setUser] = useRecoilState(userState);

  const [name, setName] = useState(userName);
  const modalBackgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = async (e: React.MouseEvent<HTMLDivElement>): Promise<void> => {
    if (e.target === modalBackgroundRef.current) {
      onClose();
    }
  };

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>, name: string) => {
    e.preventDefault();
    try {
      const data = await authInstance.put(
        "/users",
        {
          name: name,
        },
        {
          headers: {
            Authorization: user.accessToken,
          },
        },
      );
      if (data.status === 200) {
        alert("수정되었습니다.");
        onClose();
        if (onNameUpdated) {
          onNameUpdated(name);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 405 || error.response.status === 401) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          alert("수정에 실패하였습니다.");
          onClose();
        } else {
          console.error(error.response);
        }
      }
      console.error(error);
    }
  };

  return (
    <commonStyle.ModalBackground onClick={handleClickBackground} ref={modalBackgroundRef}>
      <commonStyle.Modal>
        <div>
          <style.Form onSubmit={e => handleEdit(e, name ? name : "")}>
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
            <commonStyle.ConfirmButton type="submit">완료</commonStyle.ConfirmButton>
          </commonStyle.ButtonWrapper>
        </div>
      </commonStyle.Modal>
    </commonStyle.ModalBackground>
  );
};

export default ProfileEditModal;
