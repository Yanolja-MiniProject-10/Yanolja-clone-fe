import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const Wrapper = styled.div`
  position: fixed;
  height: 90px;
  width: 100%;

  z-index: 1;

  max-width: 750px;

  bottom: 1px;

  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: flex-end;
  gap: 1rem;

  padding: 1.5rem 3rem;

  border-top: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;
`;

export const ReservationInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const ReservationGuest = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const DisableCartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.darkGray};
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

export const DisableCartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.white};

  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: not-allowed;
`;

export const ReservationButton = styled.button`
  width: 250px;
  height: 40px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.mainPink};

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;

export const DisableReservationButton = styled.button`
  width: 100px;
  height: 35px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.darkGray};

  color: ${({ theme }) => theme.color.white};
  font-size: 14px;

  cursor: not-allowed;
`;
