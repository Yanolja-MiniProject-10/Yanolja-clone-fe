import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const Box = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  gap: 3rem;
  align-items: center;

  @media screen and (width < 840px) {
    height: 28rem;

    flex-direction: column;
    justify-content: center;

    padding: 1rem 0;
  }
`;

export const RoomImgWrapper = styled.div`
  width: 450px;
  height: 200px;

  display: flex;
  align-items: center;

  @media screen and (width < 840px) {
    height: 300px;
  }
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 80%;

  border-radius: 10px;

  @media screen and (width < 840px) {
    width: 100%;
    height: 100%;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  @media screen and (width < 840px) {
    justify-content: flex-start;

    width: 410px;
  }
`;

export const RoomTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (width < 840px) {
    width: 400px;
  }
`;

export const RoomName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const RoomDetailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.mainPink};

  border: none;
  background-color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;

export const RoomCheckInOut = styled.div`
  display: flex;
  gap: 0.4rem;

  span {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const RoomCheckIn = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomCheckOut = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (width < 840px) {
    width: 410px;
  }
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};

  margin-top: 1.8rem;
`;

export const ButtonWraper = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
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
  width: 110px;
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
