import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 52.5rem;
  padding: 5px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);

  * {
    transition: 0.4s;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LinkedBox = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: center;

  color: ${({ theme }) => theme.color.darkGray};

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

const IconLabel = styled.p`
  display: flex;
  font-size: 12px;
`;

const CenterIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-image: url("favicon.svg");
  background-size: cover;
`;

export { Container, LinkedBox, IconLabel, CenterIcon };
