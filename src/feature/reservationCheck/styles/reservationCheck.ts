import styled from "styled-components";
import { PiAirplaneTiltDuotone } from "react-icons/pi";

export const ReservationChecktWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 30px;
`;

export const ChekPaymentWrapper = styled.div`
  width: 100%;

  padding: 40px;

  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;

export const Airplane = styled(PiAirplaneTiltDuotone)`
  margin: 5px 10px;

  font-size: 50px;
  color: ${({ theme }) => theme.color.mainPink};
`;

export const ChekPaymentContents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
  padding: 20px;

  background-color: white;
`;

export const ChekPaymentTitle = styled.h2`
  margin: 0 5px 10px;
  padding: 10px 5px;
`;

export const ChekPaymentBtn = styled.button`
  width: 45%;
  height: 45px;

  margin: 10px 0 60px;

  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.mainPink};
  background-color: transparent;

  transition: 0.5s;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color.mainPink};
  }
`;

export const RoomOptionsTrans = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 25px 0;
  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 5px 20px;

  font-size: ${({ theme }) => theme.fontSize.xxs};

  color: ${({ theme }) => theme.color.mainPink};
`;
