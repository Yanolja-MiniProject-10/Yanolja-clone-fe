import styled from "styled-components";

export const RoomOptions = styled.div`
  width: 95%;
  height: 80px;

  display: flex;
  align-items: center;

  margin: 5px 5px 5px 10px;
`;

export const RoomOptionImg = styled.img<{ $isPaymentId?: boolean }>`
  width: 75px;
  height: 75px;

  border-radius: 5px;

  object-fit: cover;

  opacity: ${props => (props.$isPaymentId ? 0.5 : 1)};
`;

export const RoomOptionsText = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 15px;
  padding: 5px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomOptionsName = styled.span`
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const RoomOptionsCapacity = styled.span`
  line-height: 30px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomOptionsPrice = styled.span`
  width: 110px;

  text-align: end;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
