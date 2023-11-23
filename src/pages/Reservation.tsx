import ReservationSummary from "../feature/reservation/components/ReservationSummary";
import GuestInformation from "../feature/reservation/components/GuestInformation";
import ReservationPay from "../feature/reservation/components/ReservationPay";
import { ReservationWrapper } from "../styles/reservation";

const Reservation = () => {
  return (
    <ReservationWrapper>
      <ReservationSummary />
      <GuestInformation />
      <ReservationPay />
    </ReservationWrapper>
  );
};

export default Reservation;
