import { Wrapper, Box } from "../styles/layout";
import MainHeader from "../feature/home/MainHeader.tsx";
import CommonHeader from "./commonHeader/CommonHeader.tsx";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Wrapper>
      <Box>
        {pathname === "/" ? <MainHeader /> : <CommonHeader />}
        {children}
      </Box>
    </Wrapper>
  );
};

export default Layout;
