import styled, { css } from "styled-components";

const CalendarLayout = styled.div<{ $isCalendarShow: boolean }>`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;

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

const CalendarContainer = styled.div`
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

    .react-datepicker__navigation.react-datepicker__navigation--previous {
      display: none;
    }

    .react-datepicker__navigation.react-datepicker__navigation--next {
      display: none;
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__month-container:nth-child(n + 5) {
      .react-datepicker__header {
        display: none;
      }
      // .react-datepicker__header.react-datepicker__header--custom {
      //   background-color: white;
      //   border: none;
      // }
      // .react-datepicker__day-names {
      //   display: none;
      // }
    }

    // .react-datepicker__week {
    //   height: 50px;
    // }

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

    // .react-datepicker__day {
    //   width: 3rem;
    //   height: 3rem;
    // }
    .react-datepicker__day:nth-child(1) {
      color: red;
    }
    .react-datepicker__day:nth-child(7) {
      color: blue;
    }
  }
`;

const CalendarNav = styled.nav`
  width: 100vw;
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

const CalendarButton = styled.button`
  width: 90%;
  max-width: 750px;
  height: 75%;

  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: 5px;
`;

export { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton };
