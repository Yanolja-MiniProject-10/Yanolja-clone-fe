import ReservationCaution from "./ReservationCaution";
import ReservationRooms from "./ReservationRooms";
import { ReservationWrapper } from "../styles/reservationWrapper";

const ReservationSummary = () => {
  return (
    <ReservationWrapper>
      <ReservationCaution />
      <ReservationRooms />
    </ReservationWrapper>
  );
};

export default ReservationSummary;
