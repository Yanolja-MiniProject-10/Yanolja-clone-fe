/* eslint-disable @typescript-eslint/no-var-requires */
import styled, { css } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth, getDate, get } from "date-fns";
import ko from "date-fns/locale/ko";
import { useEffect, useState } from "react";
// import _ from "lodash";

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

const CalendarTemplate = styled(DatePicker)`
  width: 400px;
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

interface Props {
  isCalendarShow: boolean;
  setIsCalendarShow: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const AccommodationCalender = ({
  isCalendarShow,
  setIsCalendarShow,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) => {
  registerLocale("ko", ko);
  // const _ = require("lodash");
  // const years = _.range(getYear(new Date()), 2099, 1);

  const handleDatePick = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <CalendarLayout $isCalendarShow={isCalendarShow}>
      <CalendarContainer className="container@">
        <DatePicker
          selected={startDate}
          onChange={handleDatePick}
          selectsRange
          shouldCloseOnSelect={false}
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          monthsShown={6}
          inline
        />
        <CalendarNav>
          <CalendarButton onClick={() => setIsCalendarShow(prev => !prev)}>확인</CalendarButton>
        </CalendarNav>
      </CalendarContainer>
    </CalendarLayout>
  );
};

export default AccommodationCalender;
