import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.brightGray};
`;
const Box = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 840px;
  background-color: ${({ theme }) => theme.color.white};
`;
