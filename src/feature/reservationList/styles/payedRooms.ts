import styled from "styled-components";

export const PayedRoomsList = styled.li<{ $isPaymentId: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 20px 0;
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 20px;

  box-shadow: ${({ theme }) => theme.box.shadow};
  text-decoration: ${props => (props.$isPaymentId ? "line-through" : "none")};
  color: ${props => (props.$isPaymentId ? props.theme.color.middleGray : "black")};
`;

export const RoomOptionsCancel = styled.div<{ $isPaymentId: boolean }>`
  width: 100%;
  height: 30px;

  margin: 0 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.mainPink};

  color: ${props => (props.$isPaymentId ? props.theme.color.middleGray : props.theme.color.mainPink)};
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

export const ReservationNumber = styled.span`
  color: ${({ theme }) => theme.color.hoverPink};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomOptionsTrans = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 15px 0 20px;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 5px 20px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;
