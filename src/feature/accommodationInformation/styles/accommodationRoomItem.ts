import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const Box = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  gap: 1rem;
  align-items: center;

  padding: 1rem;

  @media screen and (width < 840px) {
    height: 35rem;

    flex-direction: column;
    justify-content: center;

    padding: 2rem 0 1rem;

    background-color: pink;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.color.middleGray};

    &:hover {
      color: ${({ theme }) => theme.color.black};
      transition: 0.4s;
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: ${({ theme }) => theme.fontSize.md} !important;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;

    background: ${({ theme }) => theme.color.darkGray};

    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    transition: width 0.4s;
    border-radius: 5px;

    background: ${({ theme }) => theme.color.mainPink};
  }
`;

export const RoomImgWrapper = styled.div`
  width: 270px;

  display: flex;
  align-items: center;

  @media screen and (width < 840px) {
    width: 80%;
    min-width: 460px;
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

  width: 60%;

  @media screen and (width < 840px) {
    padding: 1rem;

    width: 80%;
    min-width: 460px;
  }
`;

export const SkeletonRoomTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RoomTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (width < 840px) {
    width: 100%;
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

export const RoomCheckInOut = styled.p`
  display: flex;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  width: 100%;
`;

export const CartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const CartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.white};

  width: 35px;
  height: 35px;

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
  width: 100px;
  height: 35px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.mainPink};

  color: ${({ theme }) => theme.color.white};
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;
