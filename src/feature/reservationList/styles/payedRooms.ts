import styled from "styled-components";

export const PayedRoomsList = styled.li<{ $isPaymentId: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};

  text-decoration: ${props => (props.$isPaymentId ? "none" : "line-through")};
  color: ${props => (props.$isPaymentId ? "black" : props.theme.color.middleGray)};
`;

export const RoomOptionsTrans = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 25px 0 0;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 5px 20px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const ReservationNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomOptionsCancel = styled.div<{ $isPaymentId: boolean }>`
  width: 100%;
  height: 30px;

  margin: 20px 0;
  padding-left: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.mainPink};

  color: ${props => (props.$isPaymentId ? props.theme.color.mainPink : props.theme.color.middleGray)};
`;

export const CancelBtn = styled.button`
  width: 85px;
  height: 30px;

  border: none;
  border-radius: ${({ theme }) => theme.box.radius};

  color: white;
  background-color: ${({ theme }) => theme.color.middleGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.color.mainPink};
  }
`;
