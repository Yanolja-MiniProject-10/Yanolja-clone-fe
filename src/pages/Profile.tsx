import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import LoginModal from "../components/loginModal/LoginModal";
import LogoutModal from "../feature/profile/components/LogoutModal";
import ProfileEditModal from "../feature/profile/components/ProfileEditModal";
import { getUser } from "../feature/profile/profile.api";
import * as style from "../feature/profile/styles/profile";
import { userState } from "../recoil/userData";

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);

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
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 405 || error.response.status === 401) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          setIsLoginModal(true);
        } else {
          console.error(error.response);
        }
      }
    }
  };

  // 로그아웃
  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setUser({
      accessToken: "",
      refreshToken: "",
    });

    setIsLogoutModal(false);
  };

  useEffect(() => {
    if (user.accessToken) {
      handleGetUser();
    }

    return () => {
      setName("");
      setEmail("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.accessToken]);

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
          <div onClick={() => (user.accessToken ? setIsEditModal(true) : setIsLoginModal(true))}>내 정보 수정하기</div>
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
