import { useEffect, useState } from "react";
import { accommodationDateState } from "../../recoil/accommodation/accommodationDate.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { handleDateString } from "../../feature/accommodation/accommodation.utils.ts";
import * as style from "../../feature/accommodation/styles/accommodationInfo.ts";
import { IoCalendarClearOutline } from "react-icons/io5";
import AccommodationCalendar from "../accommodationCalendar/AccommodationCalendar.tsx";
import { getSessionValue } from "../../util/searchSessionValue.tsx";
import { accommodationMemberState } from "../../recoil/accommodation/accommodationMember.ts";
import { getTomorrow } from "../../util/getTomorrow.tsx";
import { useLocation } from "react-router-dom";

const AccommodationInfoCalender = () => {
  const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<string | undefined>("");
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const setAccommodationDateState = useSetRecoilState(accommodationDateState);
  const setAccommodationMemberState = useSetRecoilState(accommodationMemberState);
  const { pathname } = useLocation();
  const prevHistoryPage = getSessionValue("historyPage");

  useEffect(() => {
    if (startDate.length || endDate.length) {
      setAccommodationDateState({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });
    }
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      setDateRange(handleDateString(startDate, endDate));
    }
  }, [startDate, endDate]);

  useEffect(() => {
    // const prevHistoryIdx = getSessionValue("historyIdx");
    const thisPage = pathname.split("/")[1];
    if (thisPage !== prevHistoryPage) {
      const tomorrow = getTomorrow();

      setAccommodationDateState({
        startDate: new Date(),
        endDate: tomorrow,
      });
      setAccommodationMemberState({
        guest: 2,
      });
    }
  }, [prevHistoryPage]);

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
