import { ReactNode } from "react";
import MainHeader from "../../feature/home/components/MainHeader.tsx";
import { Wrapper, Box } from "./layout.styles.ts";
import CommonHeader from "../commonHeader/CommonHeader.tsx";
import { useLocation } from "react-router-dom";
import ToTopButton from "../toTopButton/ToTopButton.tsx";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Wrapper>
      <Box>
        {pathname === "/" ? <MainHeader /> : <CommonHeader />}
        {children}

        <ToTopButton />
      </Box>
    </Wrapper>
  );
};

export default Layout;
