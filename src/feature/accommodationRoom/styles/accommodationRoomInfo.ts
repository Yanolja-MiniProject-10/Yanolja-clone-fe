import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 840px;
  position: relative;

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
    font-size: ${({ theme }) => theme.fontSize.lg} !important;
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

  @media screen and (width < 840px) {
    min-width: 460px;
  }
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextInfo = styled.div`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RoomName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
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

export const RoomCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const NoAvailableRoom = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.hoverPink};

  margin-top: 10px;
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};

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

  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const StaticDesc = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const RoomDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.middleGray};
  line-height: 25px;
`;
