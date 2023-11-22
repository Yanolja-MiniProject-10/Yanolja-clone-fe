import styled from "styled-components";

export const TotalSelectedPayWrapper = styled.div`
  width: 100%;
  height: 150px;

  margin: 20px 0;
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;

  .total-pay-title {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const TotalPay = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  letter-spacing: 1px;

  .total-pay-sum {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.middleGray};
  }

  .total-pay-price {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
