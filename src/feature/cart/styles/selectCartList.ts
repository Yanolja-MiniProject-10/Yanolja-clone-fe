import styled from "styled-components";

export const SelectCartListWrapper = styled.div`
  width: 100%;

  padding: 40px;

  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;

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

export const CartList = styled.ul`
  width: 100%;

  margin: 20px 0 10px;
`;
