import styled, { css } from "styled-components";

const CalendarLayout = styled.div<{ $isCalendarShow: boolean }>`
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.brightGray};
  top: 100%;
  left: 0;

  ${props =>
    props.$isCalendarShow &&
    css`
      top: 50px;
      transition: all 0.5s ease;
    `};
`;

const CalendarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box.shadow};
  z-index: 3;
  width: auto;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`;

const CalendarNav = styled.nav`
  width: 100%;
  height: 50px;
  z-index: 4;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarButton = styled.button`
  width: 90%;
  height: 75%;
  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton };
