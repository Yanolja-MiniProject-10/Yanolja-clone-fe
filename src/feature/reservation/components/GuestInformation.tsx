import { ReservationWrapper } from "../styles/reservationWrapper";
import * as style from "../styles/guestInformation";

const GuestInformation = () => {
  return (
    <ReservationWrapper>
      <style.GuestInfoTitle>예약자 정보</style.GuestInfoTitle>

      <style.GuestName>최지훈</style.GuestName>
      <span>/</span>
      <style.GuestEmail>123@yanolja.com</style.GuestEmail>
    </ReservationWrapper>
  );
};

export default GuestInformation;
