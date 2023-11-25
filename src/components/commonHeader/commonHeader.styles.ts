import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 52.5rem;
  height: 60px;

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
    transition: 0.4s;
    color: black;
  }
`;

const ArrowBox = styled.div`
  cursor: pointer;

  &:hover {
    * {
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

  cursor: pointer;

  * {
    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

export { Container, ArrowBox, RightIcons, HeadingText };
