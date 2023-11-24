import React from "react";
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
      <LinkedBox to="/reservation">
        <MdOutlineBook />
        <IconLabel>예약</IconLabel>
      </LinkedBox>
      <CenterIcon onClick={scrollToTop} />
      <LinkedBox to="/profile">
        <MdOutlinePersonOutline />
        <IconLabel>마이</IconLabel>
      </LinkedBox>
    </Container>
  );
};

export default NavBar;
