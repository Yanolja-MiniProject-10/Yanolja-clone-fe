import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 750px;
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

  transition: 0.4s;

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

const CartBadge = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;

  background-color: ${({ theme }) => theme.color.mainPink};

  color: white;
`;

export { Container, IconBox, RightIcons, HeadingText, CartBadge };
