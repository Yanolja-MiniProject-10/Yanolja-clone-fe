import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/loginModal/LoginModal";
import LogoutModal from "../feature/profile/components/LogoutModal";
import ProfileEditModal from "../feature/profile/components/ProfileEditModal";
import * as style from "../feature/profile/styles/profile";
import { getUser } from "../feature/profile/profile.api";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "../recoil/userData";
import authInstance from "../api/authInstance";

const Profile = () => {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  // user 정보 가져오기
  const handleGetUser = async () => {
    try {
      const data = await getUser();

      if (data.status === 200) {
        setName(data.data.data.name);
        setEmail(data.data.data.email);
      }
    } catch (error) {
      console.error("유저 정보 조회 실패:", error);
    }
  };

  // 로그아웃
  const handleLogout = async () => {
    try {
      const data = await authInstance.get("/auth/logout", {
        headers: {
          Authorization: user.accessToken,
        },
      });
      if (data.status === 200) {
        resetUser(); // userState를 초기 상태로 재설정

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        setIsLogoutModal(false);
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUser();

    return () => {
      setName("");
      setEmail("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNameUpdated = (name: string) => {
    setName(name); // 이름 상태 업데이트
  };

  return (
    <>
      <style.Div>
        <style.MyProfile>
          <div>
            <style.Name>{user.accessToken ? name : "로그인이 필요합니다."}</style.Name>
            {user.accessToken && <style.Email>{email}</style.Email>}
          </div>
          {user.accessToken ? (
            <style.Button
              type="button"
              onClick={() => {
                setIsLogoutModal(true);
              }}
            >
              로그아웃
            </style.Button>
          ) : (
            <style.Button type="button" onClick={() => navigate("/login")}>
              로그인
            </style.Button>
          )}
        </style.MyProfile>

        <p>프로필</p>
        <style.Hr />
        <style.List>
          <div onClick={() => (user ? setIsEditModal(true) : setIsLoginModal(true))}>내 정보 수정하기</div>
          <div onClick={() => navigate("/reservation-list")}>예약 내역</div>
          <div onClick={() => navigate("/cart")}>장바구니</div>
        </style.List>
      </style.Div>

      {isLogoutModal && <LogoutModal onConfirmLogout={handleLogout} onClose={() => setIsLogoutModal(false)} />}
      {isEditModal && (
        <ProfileEditModal userName={name} onClose={() => setIsEditModal(false)} onNameUpdated={handleNameUpdated} />
      )}
      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default Profile;
