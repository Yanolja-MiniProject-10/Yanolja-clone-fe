import { useRef, useState } from "react";
import * as commonStyle from "../../../components/loginModal/loginModal.styles";
import { ModalProps } from "../../../components/loginModal/loginModal.types";
import * as style from "../styles/profileEditModal";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/userData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { putEditUser } from "../profile.api";

const ProfileEditModal = ({ onClose, userName, onNameUpdated }: ModalProps) => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

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
      const data = await putEditUser(name);
      if (data.status === 200) {
        alert("수정되었습니다.");
        onClose();
        if (onNameUpdated) {
          onNameUpdated(name);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401 || error.response.status === 405) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          window.alert("인증 오류가 발생했습니다. 로그인을 다시 해주세요.");
          onClose();
          navigate("/login");
        } else {
          window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
          navigate("/");
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigate("/");
      }
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

            <style.EditButtonWrapper>
              <commonStyle.CancelButton type="button" onClick={onClose}>
                취소
              </commonStyle.CancelButton>
              <commonStyle.ConfirmButton type="submit">완료</commonStyle.ConfirmButton>
            </style.EditButtonWrapper>
          </style.Form>
        </div>
      </commonStyle.Modal>
    </commonStyle.ModalBackground>
  );
};

export default ProfileEditModal;
