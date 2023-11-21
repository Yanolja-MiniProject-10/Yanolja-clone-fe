import { Wrapper, Box } from "../styles/layout";
import MainHeader from "../feature/home/MainHeader.tsx";
import CommonHeader from "./commonHeader/CommonHeader.tsx";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Box>
        {/* <MainHeader /> */}
        <CommonHeader />
        {children}
      </Box>
    </Wrapper>
  );
};

export default Layout;
