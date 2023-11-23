import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Wrapper = styled.div`
  max-width: 840px;
  position: relative;
`;

export const CustomPrevArrow = styled(IoIosArrowBack)`
  width: 50px;
  height: 50px;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  z-index: 10;

  color: ${({ theme }) => theme.color.middleGray};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    transition: 0.4s;
  }
`;

export const CustomNextArrow = styled(IoIosArrowForward)`
  width: 50px;
  height: 50px;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  z-index: 10;

  color: ${({ theme }) => theme.color.middleGray};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    transition: 0.4s;
  }
`;

export const RoomImg = styled.img`
  max-width: 52.5rem;
  width: 100%;
  max-height: 35rem;
  height: 100%;
`;

export const TextInfo = styled.div`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RoomName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
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

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};

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
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.middleGray};
  line-height: 25px;
`;
