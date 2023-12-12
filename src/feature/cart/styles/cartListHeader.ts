import styled from "styled-components";

export const SelectCartListHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const DeleteCheckedbox = styled.button<{ $selectedRooms?: number }>`
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xxs};

  color: ${props => (props.$selectedRooms ? props.theme.color.mainPink : props.theme.color.middleGray)};
  background-color: transparent;

  transition: 0.5s;
`;
