import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  width: 100%;
  max-width: 52.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
  font-size: ${({ theme }) => theme.fontSize.xl};
  vertical-align: middle;
  * {
    cursor: pointer;
    color: black;
    &:hover {
      color: ${({ theme }) => theme.color.hoverPink};
    }
  }
`;

const RightIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export { Container, RightIcons };
