import { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton } from "./AccommodationCalendar";
import { CalendarProps } from "./accommodationCalendar.types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useSetRecoilState } from "recoil";
import { accommodationDateState } from "../../recoil/accommodation/accommodationDate";
import { getDateValue, setDateValue } from "../../feature/accommodation/accommodation.utils";
import { useEffect } from "react";
// import _ from "lodash";

const AccommodationCalendar = ({ isCalendarShow, setIsCalendarShow, startDate, endDate }: CalendarProps) => {
  const sessionStartDate = getDateValue("startDate");
  const sessionEndDate = getDateValue("endDate");

  console.log(sessionStartDate, sessionEndDate, "@@##");
  console.log(startDate, endDate, "##$$");

  useEffect(() => {
    if (!sessionStartDate || !sessionEndDate) {
      setDateValue("startDate", startDate);
      setDateValue("endDate", endDate);
    }
  }, []);

  registerLocale("ko", ko); // 달력 한국어로 세팅
  const setAccommodationDateState = useSetRecoilState(accommodationDateState);
  const handleDatePick = (dates: Array<Date | null>) => {
    const [start, end] = dates;
    console.log(start, end);
    console.log(sessionStartDate, sessionEndDate);
    setAccommodationDateState({
      startDate: start!,
      endDate: end!,
    });

    setDateValue("startDate", start!);
    setDateValue("endDate", end!);
    console.log(getDateValue("startDate"));
  };

  const handleDateChange = () => {
    setIsCalendarShow(prev => !prev);
    setAccommodationDateState({
      startDate: sessionStartDate!,
      endDate: sessionEndDate!,
    });
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
          <CalendarButton onClick={handleDateChange}>확인</CalendarButton>
        </CalendarNav>
      </CalendarContainer>
    </CalendarLayout>
  );
};

export default AccommodationCalendar;
