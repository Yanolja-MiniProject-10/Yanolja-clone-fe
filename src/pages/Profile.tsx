import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEditModal from "../feature/profile/components/ProfileEditModal";
import { Button, Div, Email, Hr, List, MyProfile, Name } from "../feature/profile/styles/profile";

const Profile = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<boolean>(true); // 로그인 UI 전환 위한 임시 state

  return (
    <>
      <Div>
        <MyProfile>
          <div>
            <Name>{currentUser ? "야놀자님" : "로그인이 필요합니다."}</Name>
            {currentUser && <Email>yanolja@yanolja.com</Email>}
          </div>
          <Button onClick={() => setCurrentUser(false)}>{currentUser ? "로그아웃" : "로그인"}</Button>
        </MyProfile>

        <p>프로필</p>
        <Hr />
        <List>
          <div onClick={() => setIsModal(true)}>내 정보 수정하기</div>
          <div>예약 내역</div>
          <div onClick={() => navigate("/cart")}>장바구니</div>
          <div>찜 목록</div>
        </List>
      </Div>

      {isModal && <ProfileEditModal onClose={() => setIsModal(false)} />}
    </>
  );
};

export default Profile;
