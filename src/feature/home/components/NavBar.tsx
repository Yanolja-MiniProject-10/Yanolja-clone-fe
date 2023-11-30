import { MdOutlineBook, MdOutlinePersonOutline } from "react-icons/md";
import { Container, LinkedBox, IconLabel, CenterIcon } from "../styles/navBar";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/userData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../../../components/loginModal/LoginModal";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <LinkedBox
          onClick={() => {
            user.accessToken ? navigate("/reservation-list") : setIsLoginModal(true);
          }}
        >
          <MdOutlineBook />
          <IconLabel>예약</IconLabel>
        </LinkedBox>
        <div onClick={scrollToTop}>
          <CenterIcon src="favicon.ico" alt="상단으로 가기" />
        </div>
        <LinkedBox onClick={() => navigate("/profile")}>
          <MdOutlinePersonOutline />
          <IconLabel>마이</IconLabel>
        </LinkedBox>
      </Container>

      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default NavBar;
