import styled from "styled-components";
import { ButtonWrapper } from "./profileEditModal";

export const Title = styled.p`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const StyledButtonWrapper = styled(ButtonWrapper)`
  width: 100%;
  justify-content: space-evenly;
`;
