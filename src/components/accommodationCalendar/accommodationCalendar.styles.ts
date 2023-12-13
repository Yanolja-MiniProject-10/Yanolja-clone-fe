import { IoClose } from "react-icons/io5";
import styled, { css } from "styled-components";

export const CalendarLayout = styled.div<{ $isCalendarShow: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 100%;
  left: 0;

  z-index: 2;
  background-color: ${({ theme }) => theme.color.brightGray};

  ${props =>
    props.$isCalendarShow &&
    css`
      top: 50px;
      transition: all 0.5s ease;
    `};
`;
export const CalendarDateInfoBox = styled.div`
  width: 100%;
  max-width: 750px;

  display: flex;
  justify-content: space-between;

  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const CalendarDateInfoTextBox = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 1rem 0;

  display: flex;
  justify-content: center;

  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const CalendarDateStartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: ${({ theme }) => theme.fontSize.lg};

  > div {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 0.25rem;
  }
`;

export const CalendarDateEndBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.lg};

  > div {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 0.25rem;
  }
`;

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 750px;
  height: calc(100% - 50px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 3;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box.shadow};
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    display: none;
    overflow-y: scroll;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  & .react-datepicker {
    height: calc(100% - 70px);
    border: none;

    .react-datepicker__navigation.react-datepicker__navigation--previous {
      display: none;
    }

    .react-datepicker__navigation.react-datepicker__navigation--next {
      display: none;
    }

    .react-datepicker__current-month {
      display: none;
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__month-container:nth-child(n + 4) {
      .react-datepicker__header {
        display: none;
      }
    }

    .react-datepicker__day-names {
      background-color: #414141;
    }

    .react-datepicker__day-names > .react-datepicker__day-name {
      color: white;
      font-weight: 900;
    }

    .react-datepicker__day-names > .react-datepicker__day-name:first-child {
      color: #dd2e5f;
    }
    .react-datepicker__day-names > .react-datepicker__day-name:last-child {
      color: #01aeff;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 3rem;
      line-height: 3rem;
    }
    .react-datepicker__day:nth-child(1) {
      color: #dd2e5f;
    }
    .react-datepicker__day:nth-child(7) {
      color: #01aeff;
    }
  }
`;

export const CalendarCloseBox = styled.div`
  width: 100%;
  max-width: 750px;

  display: flex;
  justify-content: flex-end;
`;

export const CalenderCloseIcon = styled(IoClose)`
  width: 1rem;
  height: 1rem;

  position: absolute;
  right: 1rem;

  cursor: pointer;
`;

export const CalendarNav = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 50px;
  left: 0;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 4;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const CalendarButton = styled.button`
  width: 90%;
  max-width: 750px;
  height: 75%;

  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: 5px;
`;
