import { ReservationWrapper } from "../styles/reservationWrapper";
import { GuestInfoTitle, GuestName, GuestEmail } from "../styles/guestInformation";

const GuestInformation = () => {
  return (
    <ReservationWrapper>
      <GuestInfoTitle>예약자 정보</GuestInfoTitle>

      <GuestName>최지훈</GuestName>
      <span>/</span>
      <GuestEmail>123@yanolja.com</GuestEmail>
    </ReservationWrapper>
  );
};

export default GuestInformation;
