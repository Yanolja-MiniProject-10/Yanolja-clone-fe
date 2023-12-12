import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const CartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const DisableCartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.middleGray};
`;

export const CartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.white};

  width: 32px;
  height: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.color.mainPink};
    transition: 0.4s;

    ${CartIcon} {
      color: ${({ theme }) => theme.color.white};
      transition: 0.4s;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisableCartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.white};

  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: not-allowed;
`;
