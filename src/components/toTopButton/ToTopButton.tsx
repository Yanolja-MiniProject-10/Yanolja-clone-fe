import StyledToTopButton from "./toTopButton.styles";
import { FaArrowUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ToTopButton = () => {
  const location = useLocation();
  const { pathname } = location;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledToTopButton style={pathname !== "/" ? { bottom: "5%" } : { bottom: "15%" }} onClick={scrollToTop}>
      <FaArrowUp />
    </StyledToTopButton>
  );
};

export default ToTopButton;
