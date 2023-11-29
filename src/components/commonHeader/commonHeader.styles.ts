import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 750px;
  height: 50px;

  position: fixed;
  top: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.md};

  vertical-align: middle;
  * {
    color: black;
  }
`;

const IconBox = styled.div`
  cursor: pointer;

  &:hover {
    * {
      transition: 0.4s;
      color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const HeadingText = styled.p`
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`;

const RightIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export { Container, IconBox, RightIcons, HeadingText };
