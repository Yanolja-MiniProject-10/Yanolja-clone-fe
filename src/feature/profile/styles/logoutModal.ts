import styled from "styled-components";
import { ButtonWrapper } from "../../../components/loginModal/loginModal.styles";

export const LogoutModal = styled.div`
  margin: 0 auto;
  min-height: 9rem;
  padding: 1.3rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.box.radius};
`;

export const Title = styled.p`
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const LogoutButtonWrapper = styled(ButtonWrapper)`
  width: 80%;
  justify-content: space-evenly: 
`;
