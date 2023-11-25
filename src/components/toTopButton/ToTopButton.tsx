import React from "react";
import StyledToTopButton from "./toTopButton.styles";
import { FaArrowUp } from "react-icons/fa6";

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledToTopButton onClick={scrollToTop}>
      <FaArrowUp />
    </StyledToTopButton>
  );
};

export default ToTopButton;
