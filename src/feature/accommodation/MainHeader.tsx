import React from "react";
import { Container, Box, InputText, SearchIcon, CartIcon } from "./MainHeader.style";

const MainHeader = () => {
  return (
    <Container>
      <Box>
        <InputText>어디에서 놀까요?</InputText>
        <SearchIcon />
      </Box>
      <CartIcon />
    </Container>
  );
};

export default MainHeader;
