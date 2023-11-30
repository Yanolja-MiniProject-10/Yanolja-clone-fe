import { MdOutlineBook, MdOutlinePersonOutline } from "react-icons/md";
import { Container, LinkedBox, IconLabel, CenterIcon } from "../styles/navBar";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <LinkedBox to="/resrvation-list">
        <MdOutlineBook />
        <IconLabel>예약</IconLabel>
      </LinkedBox>
      <div onClick={scrollToTop}>
        <CenterIcon src="favicon.ico" alt="상단으로 가기" />
      </div>
      <LinkedBox to="/profile">
        <MdOutlinePersonOutline />
        <IconLabel>마이</IconLabel>
      </LinkedBox>
    </Container>
  );
};

export default NavBar;
