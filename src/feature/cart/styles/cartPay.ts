import styled from "styled-components";

export const CartPayWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;

  width: 100%;
  max-width: 750px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 50px -30px 0;
  border-top: 1px solid ${({ theme }) => theme.color.brightGray};

  padding: 30px 50px 20px;

  background-color: white;
`;

export const CartPayContents = styled.div`
  margin: 0 20px;

  display: flex;
  justify-content: space-between;
`;

export const CartPayTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const CartPayPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const CartPayBtn = styled.button<{ $selectedRooms?: number }>`
  width: 100%;
  height: 50px;

  border: none;
  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  color: white;
  background-color: ${props => (props.$selectedRooms ? props.theme.color.mainPink : props.theme.color.middleGray)};

  transition: 0.5s;
`;
