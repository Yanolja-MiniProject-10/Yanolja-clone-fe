import React from "react";
import { Container, RightIcons } from "./CommonHeader.ts";
import { Link, useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const CommonHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack />
      </div>
      <RightIcons>
        <Link to="/search">
          <IoSearch />
        </Link>
        <Link to="/">
          <BiHome />
        </Link>
      </RightIcons>
    </Container>
  );
};

export default CommonHeader;
