import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  text-align: center;
`;

export const BigText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const Button = styled(Link)`
  width: 300px;
  height: 45px;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.mainPink};

  color: ${({ theme }) => theme.color.mainPink};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.mainPink};

    color: ${({ theme }) => theme.color.white};

    transition: 0.4s;
  }
`;
