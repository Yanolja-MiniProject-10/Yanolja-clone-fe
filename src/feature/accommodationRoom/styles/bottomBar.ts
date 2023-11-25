import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const Wrapper = styled.div`
  position: fixed;
  height: 120px;
  width: 100%;

  z-index: 1;

  max-width: 840px;

  bottom: 1px;

  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  padding: 1.5rem 3rem;

  border-top: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const CartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.white};

  width: 40px;
  height: 40px;

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

export const ReservationButton = styled.button`
  width: 200px;
  height: 40px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.mainPink};

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;
