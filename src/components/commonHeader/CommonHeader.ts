import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  width: 100%;
  max-width: 52.5rem;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;

  background-color: white;

  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.md};

  * {
    transition: 0.4s;
    color: black;
  }
  //z-index??
`;

const ArrowBox = styled.div`
  cursor: pointer;

  * {
    &:hover {
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
