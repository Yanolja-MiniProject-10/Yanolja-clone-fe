import styled from "styled-components";
import { Message } from "../../signUp/styles/signUp";

export const LoginMessage = styled(Message)`
  padding-bottom: 10px;
`;

export const LinkWrapper = styled.div`
  margin-right: 34px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  span:first-of-type {
    padding-right: 10px;
  }

  span:last-of-type {
    transition: 0.4s;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
      transition: 0.4s;
    }
  }
`;
