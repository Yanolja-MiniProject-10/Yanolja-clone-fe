import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  max-width: 52.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  padding: 2px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  * {
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LinkedBox = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  &:hover > * {
    color: ${({ theme }) => theme.color.hoverPink};
  }
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: center;
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
