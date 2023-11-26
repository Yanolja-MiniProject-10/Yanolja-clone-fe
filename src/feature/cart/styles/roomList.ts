import styled from "styled-components";

export const RoomOptions = styled.div`
  width: 540px;
  height: 80px;

  display: flex;
  align-items: center;

  margin: 5px 5px 5px 10px;

  cursor: pointer;
`;

export const RoomOptionImg = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 5px;

  object-fit: cover;
`;

export const RoomOptionsText = styled.div`
  width: 310px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 15px;
  padding: 5px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RoomOptionsName = styled.span`
  line-height: 25px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const RoomOptionsCapacity = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

export const RoomOptionsPrice = styled.span`
  width: 120px;

  font-size: ${({ theme }) => theme.fontSize.xs};
`;
