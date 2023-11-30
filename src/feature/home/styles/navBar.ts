import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 95;

  height: 60px;
  width: 100%;
  max-width: 750px;
  padding: 5px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  * {
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LinkedBox = styled.div`
  display: flex;
  gap: 1px;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.color.darkGray};
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

const IconLabel = styled.p`
  display: flex;

  font-size: 12px;
`;

const CenterIcon = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
`;

export { Container, LinkedBox, IconLabel, CenterIcon };
