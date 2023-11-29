import { ReactNode } from "react";
import MainHeader from "../feature/home/components/MainHeader.tsx";
import { Wrapper, Box } from "../styles/layout";
import CommonHeader from "./commonHeader/CommonHeader.tsx";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
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
