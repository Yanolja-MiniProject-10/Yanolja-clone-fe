import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/loginModal/LoginModal";
import LogoutModal from "../feature/profile/components/LogoutModal";
import ProfileEditModal from "../feature/profile/components/ProfileEditModal";
import * as style from "../feature/profile/styles/profile";
import instance from "../api/instance";
import getToken from "../util/getToken";
import { getUser } from "../feature/profile/profile.api";

const Profile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  const [isUser, setIsUser] = useState<boolean>(true); // 로그인 UI 전환 위한 state

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

  const handleLogout = async () => {
    try {
      const data = await instance.get("/auth/logout", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
          refreshToken: localStorage.getItem("refreshToken"),
        },
      });
      if (data.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        setIsUser(false);
        setIsLogoutModal(false);
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginCheck = () => {
    const { accessToken, refreshToken } = getToken();

    if (accessToken && refreshToken) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  };

  useEffect(() => {
    handleGetUser();
    handleLoginCheck();

    return () => {
      setIsUser(false);
      setName("");
      setEmail("");
    };
  }, []);

  const handleNameUpdated = (name: string) => {
    setName(name); // 이름 상태 업데이트
  };

  return (
    <>
      <style.Div>
        <style.MyProfile>
          <div>
            <style.Name>{isUser ? name : "로그인이 필요합니다."}</style.Name>
            {isUser && <style.Email>{email}</style.Email>}
          </div>
          {isUser ? (
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
          <div onClick={() => (isUser ? setIsEditModal(true) : setIsLoginModal(true))}>내 정보 수정하기</div>
          <div>예약 내역</div>
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
