import * as style from "./accommodationCalendar.styles";
import { CalendarProps } from "./accommodationCalendar.types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useSetRecoilState } from "recoil";
import { accommodationDateState } from "../../recoil/accommodationDate";
import { useState } from "react";
import { getTomorrow } from "../../util/getTomorrow";

const AccommodationCalendar = ({ isCalendarShow, setIsCalendarShow }: CalendarProps) => {
  const [startTime, setStartTime] = useState(new Date());
  const tomorrow = getTomorrow();
  const [endTime, setEndTime] = useState(tomorrow);
  const [startDateChangeFlag, setStartDateChangeFlag] = useState(false);

  registerLocale("ko", ko); // 달력 한국어로 세팅
  const setAccommodationDateState = useSetRecoilState(accommodationDateState);
  const handleDatePick = (dates: Array<Date | null>) => {
    const [start, end] = dates;

    setStartTime(start!);
    setEndTime(end!);
    if (!startDateChangeFlag && end === null) {
      setStartDateChangeFlag(true);
    }

    if (start && end) {
      setStartDateChangeFlag(false);
    }
  };

  const handleDateChange = () => {
    setIsCalendarShow(prev => !prev);
    setAccommodationDateState({
      startDate: startTime,
      endDate: endTime,
    });
  };

  const handleMaxDate = () => {
    const dateForAdd = new Date(startTime);
    if (startDateChangeFlag) {
      dateForAdd.setDate(dateForAdd.getDate() + 13);
      return dateForAdd;
    } else {
      dateForAdd.setDate(dateForAdd.getDate() + 179);
      return dateForAdd;
    }
  };
  return (
    <style.CalendarLayout $isCalendarShow={isCalendarShow}>
      <style.CalendarDateInfoTextBox>
        <div>
          <strong>미리예약</strong> : 180일 후까지 가능 | <strong>연박</strong> : 최대 14일까지 가능
        </div>
        <style.CalenderCloseIcon onClick={() => setIsCalendarShow(prev => !prev)} />
      </style.CalendarDateInfoTextBox>
      <style.CalendarDateInfoBox>
        <style.CalendarDateStartBox>
          <div>체크인</div>
          {`${startTime.getMonth() + 1}월 ${startTime.getDate()}일`}
        </style.CalendarDateStartBox>
        <style.CalendarDateEndBox>
          <div>체크아웃</div>
          {endTime ? `${endTime.getMonth() + 1}월 ${endTime.getDate()}일` : "-월 -일"}
        </style.CalendarDateEndBox>
      </style.CalendarDateInfoBox>
      <style.CalendarContainer>
        <DatePicker
          selected={startTime}
          onChange={handleDatePick}
          selectsRange
          shouldCloseOnSelect={false}
          startDate={startTime}
          endDate={endTime}
          minDate={new Date()}
          maxDate={handleMaxDate()}
          locale={ko}
          monthsShown={6}
          inline
        />
        <style.CalendarNav>
          <style.CalendarButton onClick={handleDateChange}>확인</style.CalendarButton>
        </style.CalendarNav>
      </style.CalendarContainer>
    </style.CalendarLayout>
  );
};

export default AccommodationCalendar;
