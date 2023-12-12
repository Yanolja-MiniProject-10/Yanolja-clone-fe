import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const CartList = styled.ul`
  width: 100%;

  margin: 20px 0 10px;
`;

export const AccommodationList = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const Accommodation = styled.a<{ $isPaymentId?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  text-decoration: none;
  color: ${props => (props.$isPaymentId ? props.theme.color.middleGray : "black")};

  cursor: pointer;

  &:visited {
    text-decoration: none;
    color: ${props => (props.$isPaymentId ? props.theme.color.middleGray : "black")};
  }
`;

export const AccommodationName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AccommodationAddress = styled.span`
  margin-top: 10px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.middleGray};
`;

export const RoomOptionWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 10px;
  padding: 5px;
`;

export const CartCancelBtn = styled(IoClose)`
  align-self: self-start;

  border: none;

  color: ${({ theme }) => theme.color.middleGray};
  background-color: transparent;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;
