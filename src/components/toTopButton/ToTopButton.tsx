import { useEffect, useState } from "react";
import StyledToTopButton from "./toTopButton.styles";
import { FaArrowUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ToTopButton = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isVisible) {
    return (
      <StyledToTopButton $isVisible={isVisible} $pathBottom={pathname !== "/" ? "5%" : "12%"} onClick={scrollToTop}>
        <FaArrowUp />
      </StyledToTopButton>
    );
  }
};

export default ToTopButton;
