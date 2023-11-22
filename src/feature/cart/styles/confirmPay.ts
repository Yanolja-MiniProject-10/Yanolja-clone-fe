import styled from "styled-components";

export const ConfirmPayWrapper = styled.div<{ $selectedRooms?: number }>`
  max-width: 52.5rem;
  height: 150px;

  margin: 50px -30px 0;
  padding: 30px 50px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top: 1px solid ${({ theme }) => theme.color.brightGray};
  background-color: white;

  .confirm-pay-btn {
    width: 100%;
    height: 50px;

    border: none;
    border-radius: ${({ theme }) => theme.box.radius};

    box-shadow: ${({ theme }) => theme.box.shadow};
    color: white;
    background-color: ${props => (props.$selectedRooms ? props.theme.color.mainPink : props.theme.color.middleGray)};

    transition: 0.5s;
  }
`;

export const ConfirmPay = styled.div`
  display: flex;
  justify-content: space-between;

  .confirm-pay-title {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  .confirm-pay-price {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
