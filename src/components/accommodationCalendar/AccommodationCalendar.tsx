import { CalendarLayout, CalendarContainer, CalendarNav, CalendarButton } from "./AccommodationCalendar";
import { CalendarProps } from "./accommodationCalendar.types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useSetRecoilState } from "recoil";
import { accommodationDateState } from "../../recoil/accommodation/accommodationDate";
// import _ from "lodash";

const AccommodationCalendar = ({ isCalendarShow, setIsCalendarShow, startDate, endDate }: CalendarProps) => {
  registerLocale("ko", ko); // 달력 한국어로 세팅
  const setAccommodationDateState = useSetRecoilState(accommodationDateState);
  const handleDatePick = dates => {
    const [start, end] = dates;
    setAccommodationDateState({
      startDate: start,
      endDate: end,
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
          <CalendarButton onClick={() => setIsCalendarShow(prev => !prev)}>확인</CalendarButton>
        </CalendarNav>
      </CalendarContainer>
    </CalendarLayout>
  );
};

export default AccommodationCalendar;
