import styled from "styled-components";

export const TotalSelectedPriceWrapper = styled.div`
  width: 100%;

  margin: 20px 0;
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;

export const TotalPriceTitle = styled.h2`
  margin-bottom: 20px;

  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const TotalPrice = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  letter-spacing: 1px;
`;

export const TotalPriceSum = styled.span`
  width: 60%;

  line-height: 25px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const TotalPricePrice = styled.span`
  width: 40%;

  text-align: end;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
