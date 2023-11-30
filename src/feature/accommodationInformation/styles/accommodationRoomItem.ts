import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";

export const Box = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  gap: 2rem;
  align-items: center;

  padding: 1rem 1rem 1rem 0;

  @media screen and (width < 750px) {
    height: 550px;
    min-width: 400px;

    flex-direction: column;
    justify-content: center;

    padding: 1.5rem;
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
    font-size: ${({ theme }) => theme.fontSize.xl} !important;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;

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
  height: 180px;

  display: flex;

  border-radius: 10px;

  overflow: hidden;

  @media screen and (width < 750px) {
    width: 80%;
    min-width: 400px;

    height: 60%;
  }
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 180px;

  @media screen and (width < 750px) {
    min-height: 270px;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 60%;

  @media screen and (width < 750px) {
    padding: 1rem;

    width: 80%;
    min-width: 430px;
  }
`;

export const RoomTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (width < 750px) {
    width: 100%;
  }
`;

export const RoomName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const RoomDetailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xs};
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
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const RoomCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.mainPink};
  color: #de8c12; //theme 추가
`;

export const NoAvailableRoom = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.hoverPink};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  width: 100%;

  @media screen and (width < 750px) {
    margin-top: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  width: 130px;
`;

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

export const ReservationButton = styled.button`
  width: 90px;
  height: 32px;

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
  width: 90px;
  height: 32px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.middleGray};

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  cursor: not-allowed;
`;

export const GuestIcon = styled(BsFillPeopleFill)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const CapacityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  font-size: ${({ theme }) => theme.fontSize.xs};

  color: ${({ theme }) => theme.color.darkGray};
`;

export const GuestNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.darkGray};
`;
