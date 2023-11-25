import styled from "styled-components";

export const AccommodationList = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const Accommodation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const AccommodationName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
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

  margin: 10px 0;
  padding: 5px;

  .cart-cancel-btn {
    align-self: self-start;

    margin-left: 5px;
    border: none;

    color: ${({ theme }) => theme.color.middleGray};
    background-color: transparent;

    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;
