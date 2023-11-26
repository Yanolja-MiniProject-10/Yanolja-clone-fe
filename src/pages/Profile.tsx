import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../feature/profile/components/LogoutModal";
import ProfileEditModal from "../feature/profile/components/ProfileEditModal";
import { Button, Div, Email, Hr, List, MyProfile, Name } from "../feature/profile/styles/profile";
import LoginModal from "../components/loginModal/LoginModal";

const Profile = () => {
  const navigate = useNavigate();

  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<boolean>(true); // 로그인 UI 전환 위한 임시 state

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  const handleLogout = () => {
    setCurrentUser(false);
    setIsLogoutModal(false);
  };

  return (
    <>
      <Div>
        <MyProfile>
          <div>
            <Name>{currentUser ? "야놀자님" : "로그인이 필요합니다."}</Name>
            {currentUser && <Email>yanolja@yanolja.com</Email>}
          </div>
          {currentUser ? (
            <Button
              type="button"
              onClick={() => {
                setIsLogoutModal(true);
              }}
            >
              로그아웃
            </Button>
          ) : (
            <Button type="button" onClick={() => navigate("/login")}>
              로그인
            </Button>
          )}
        </MyProfile>

        <p>프로필</p>
        <Hr />
        <List>
          <div onClick={() => (currentUser ? setIsEditModal(true) : setIsLoginModal(true))}>내 정보 수정하기</div>
          <div>예약 내역</div>
          <div onClick={() => navigate("/cart")}>장바구니</div>
        </List>
      </Div>

      {isLogoutModal && <LogoutModal onConfirmLogout={handleLogout} onClose={() => setIsLogoutModal(false)} />}
      {isEditModal && <ProfileEditModal onClose={() => setIsEditModal(false)} />}
      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default Profile;
