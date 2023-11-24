import React from "react";
import { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton } from "./AccommodationCalendar";
import { CalendarProps } from "./accommodationCalendar.types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
// import _ from "lodash";

const AccommodationCalendar = ({
  isCalendarShow,
  setIsCalendarShow,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: CalendarProps) => {
  registerLocale("ko", ko);

  const handleDatePick = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <CalendarLayout $isCalendarShow={isCalendarShow}>
      <CalendarContainer>
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

export default AccommodationCalendar;
