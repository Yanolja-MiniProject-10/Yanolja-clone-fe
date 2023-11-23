import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 52.5rem;
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
  font-size: ${({ theme }) => theme.fontSize.xl};

  vertical-align: middle;
  * {
    color: black;
  }
`;

const ArrowBox = styled.div`
  cursor: pointer;
  * {
    &:hover {
      color: ${({ theme }) => theme.color.hoverPink};
    }
  }
`;

const HeadingText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`;

const RightIcons = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  * {
    &:hover {
      color: ${({ theme }) => theme.color.hoverPink};
    }
  }
`;

export { Container, ArrowBox, RightIcons, HeadingText };
