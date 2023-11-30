import { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton } from "./AccommodationCalendar";
import { CalendarProps } from "./accommodationCalendar.types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useSetRecoilState } from "recoil";
import { accommodationDateState } from "../../recoil/accommodation/accommodationDate";
import { useState } from "react";
import { getTomorrow } from "../../util/getTomorrow";
// import _ from "lodash";

const AccommodationCalendar = ({ isCalendarShow, setIsCalendarShow }: CalendarProps) => {
  const [startTime, setStartTime] = useState(new Date());
  const tomorrow = getTomorrow();
  const [endTime, setEndTime] = useState(tomorrow);

  registerLocale("ko", ko); // 달력 한국어로 세팅
  const setAccommodationDateState = useSetRecoilState(accommodationDateState);
  const handleDatePick = (dates: Array<Date | null>) => {
    const [start, end] = dates;

    setStartTime(start!);
    setEndTime(end!);
  };

  const handleDateChange = () => {
    setIsCalendarShow(prev => !prev);
    setAccommodationDateState({
      startDate: startTime,
      endDate: endTime,
    });
  };

  return (
    <CalendarLayout $isCalendarShow={isCalendarShow}>
      <CalendarContainer>
        <DatePicker
          selected={startTime}
          onChange={handleDatePick}
          selectsRange
          shouldCloseOnSelect={false}
          startDate={startTime}
          endDate={endTime}
          minDate={new Date()}
          locale={ko}
          monthsShown={6}
          inline
        />
        <CalendarNav>
          <CalendarButton onClick={handleDateChange}>확인</CalendarButton>
        </CalendarNav>
      </CalendarContainer>
    </CalendarLayout>
  );
};

export default AccommodationCalendar;
