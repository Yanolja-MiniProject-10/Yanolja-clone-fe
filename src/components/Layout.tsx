import { Wrapper, Box } from "../styles/layout";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};

export default Layout;
