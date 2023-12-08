import styled from "styled-components";

interface ReservationButtonProps {
  $isWide?: boolean;
}

export const ReservationButton = styled.button<ReservationButtonProps>`
  width: ${({ $isWide }) => ($isWide ? "250px" : "90px")};
  height: 32px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.mainPink};

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;

export const DisableReservationButton = styled.button<ReservationButtonProps>`
  width: ${({ $isWide }) => ($isWide ? "250px" : "90px")};
  height: 32px;

  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.color.middleGray};

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  cursor: not-allowed;
`;
