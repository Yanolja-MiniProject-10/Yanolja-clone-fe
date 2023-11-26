import { useLocation } from "react-router-dom";
import * as style from "../styles/accommodationInfo";
import AccommodationNavCalender from "./AccommodationNavCalendar";
import AccommodationNavMember from "./AccommodationNavMember";
import AccommodationNavRegion from "./AccommodationNavRegion";
const AccommodationNav = () => {
  const { pathname } = useLocation();
  const entireFlag = pathname.split("/").length < 3 ? true : false;
  return (
    <style.AccommodationInfoBox>
      <AccommodationNavCalender />
      <AccommodationNavMember />
      {entireFlag ? <AccommodationNavRegion /> : null}
    </style.AccommodationInfoBox>
  );
};

export default AccommodationNav;
