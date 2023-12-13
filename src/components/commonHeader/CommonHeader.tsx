import { Container, IconBox, RightIcons, HeadingText } from "./commonHeader.styles.ts";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useMemo, memo } from "react";

const CommonHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const encordedPathName = (name: string) => {
    return encodeURI(name);
  };

  const getPageName = () => {
    switch (pathname) {
      case "/signup":
        return "회원가입";
      case "/login":
        return "로그인";
      case "/search":
        return "검색";
      case "/cart":
        return "장바구니";
      case "/accommodation":
        return "모든 숙소";
      case "/reservation":
        return "예약";
      case "/reservation-check":
        return "예약 결과 확인";
      case "/reservation-list":
        return "예약 내역 확인";
      case "/profile":
        return "마이 페이지";
      case `/category/${encordedPathName("호텔_리조트")}`:
        return "호텔/리조트";
      case `/category/${encordedPathName("펜션_풀빌라")}`:
        return "펜션/풀빌라";
      case `/category/${encordedPathName("모텔")}`:
        return "모텔";
      default:
        return " ";
    }
  };

  const isMatchingPath = useMemo(() => ["/cart", "/accommodation", "/profile"].includes(pathname), [pathname]);

  return (
    <Container>
      <IconBox
        onClick={() => {
          navigate(-1);
        }}
      >
        <MdOutlineArrowBackIos />
      </IconBox>
      <div>
        <HeadingText>{getPageName()}</HeadingText>
      </div>
      <RightIcons>
        {isMatchingPath && (
          <IconBox>
            <Link to="/search">
              <IoSearch />
            </Link>
          </IconBox>
        )}
        <IconBox>
          <Link to="/">
            <BiHome />
          </Link>
        </IconBox>
      </RightIcons>
    </Container>
  );
};

export default memo(CommonHeader);
