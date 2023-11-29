import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";

export const Wrapper = styled.div`
  max-width: 750px;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.color.middleGray};

    width: 20px;

    &:hover {
      color: ${({ theme }) => theme.color.black};
      transition: 0.4s;
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: ${({ theme }) => theme.fontSize.xxl} !important;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;

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
  width: 100%;

  display: flex;

  height: 500px;

  @media screen and (width < 750px) {
    min-width: 460px;
  }
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const TextInfo = styled.div`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RoomName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const RoomCheckInOut = styled.div`
  display: flex;
  gap: 0.4rem;

  span {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const RoomCheckIn = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomCheckOut = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #de8c12;
`;

export const NoAvailableRoom = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.hoverPink};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};

  text-align: right;
`;

export const DivideLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  width: 100%;
`;

export const RoomStaticDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem 0;

  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StaticDesc = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const RoomDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};
  line-height: 25px;
`;

export const CapacityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-top: 10px;
`;

export const GuestIcon = styled(BsFillPeopleFill)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const GuestNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};
`;
