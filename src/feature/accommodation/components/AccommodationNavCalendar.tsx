import { useEffect, useState } from "react";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate.ts";
import { useRecoilValue } from "recoil";
import { handleDateString } from "../accommodation.utils.ts";
import * as style from "../styles/accommodationInfo.ts";
import { IoCalendarClearOutline } from "react-icons/io5";
import AccommodationCalendar from "../../../components/accommodationCalendar/AccommodationCalendar.tsx";

const AccommodationInfoCalender = () => {
  const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<string | undefined>("");
  const { startDate, endDate } = useRecoilValue(accommodationDateState);

  useEffect(() => {
    if (startDate && endDate) {
      setDateRange(handleDateString(startDate, endDate));
    }
  }, [startDate, endDate]);
  return (
    <>
      <style.AccommodationInfoCalenderBox
        onClick={() => {
          setIsCalendarShow(prev => !prev);
        }}
      >
        <IoCalendarClearOutline />
        <style.AccommodationInfoCalenderParagraph>{dateRange}</style.AccommodationInfoCalenderParagraph>
      </style.AccommodationInfoCalenderBox>
      <AccommodationCalendar
        isCalendarShow={isCalendarShow}
        setIsCalendarShow={setIsCalendarShow}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

export default AccommodationInfoCalender;
