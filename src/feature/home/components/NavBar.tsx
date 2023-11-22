import React from "react";
import { MdOutlineBook } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
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
        <IoPersonOutline />
        <IconLabel>마이</IconLabel>
      </LinkedBox>
    </Container>
  );
};

export default NavBar;
