import { Container, ArrowBox, RightIcons, HeadingText } from "./commonHeader.styles.ts";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";

const CommonHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

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
      case "/profile":
        return "마이 페이지";
      case "/category/호텔_리조트":
        return "호텔/리조트";
      case "/category/펜션_풀빌라":
        return "펜션/풀빌라";
      case "/category/모텔":
        return "모텔";
      default:
        return " ";
      //예약 내역,
    }
  };

  //이후 상세 숙소 등에서도 필요
  const isMatchingPath = ["/signup", "/login", "/cart", "/accommodation", "/profile"].includes(pathname);

  return (
    <Container>
      <ArrowBox
        onClick={() => {
          navigate(-1);
        }}
      >
        <MdOutlineArrowBackIos />
      </ArrowBox>
      <div>
        <HeadingText>{getPageName()}</HeadingText>
      </div>
      <RightIcons>
        {isMatchingPath && (
          <Link to="/search">
            <IoSearch />
          </Link>
        )}
        <Link to="/">
          <BiHome />
        </Link>
      </RightIcons>
    </Container>
  );
};

export default CommonHeader;
