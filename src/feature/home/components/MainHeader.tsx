import React from "react";
import { Link } from "react-router-dom";
import { Container, LinkedBox, InputText, SearchIcon, CartIcon } from "../style/mainHeader.ts";

const MainHeader = () => {
  return (
    <Container>
      <LinkedBox to="/search">
        <InputText>어디에서 놀까요?</InputText>
        <SearchIcon />
      </LinkedBox>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </Container>
  );
};

export default MainHeader;
