import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { paymentDataState } from "../recoil/paymentData";
import { radioDataState } from "../recoil/checkedRadio";
import { usePostPaymentCart } from "../feature/reservation/hooks/queries/useFetchPaymentCart";
import ReservationSummary from "../feature/reservation/components/ReservationSummary";
import GuestInformation from "../feature/reservation/components/GuestInformation";
import ReservationPay from "../feature/reservation/components/ReservationPay";
import { PostPaymentCartPayload } from "../feature/reservation/reservation.types";
import { ReservationWrapper } from "../styles/reservation";

const Reservation = () => {
  const location = useLocation();
  const postPaymentCartPayload: PostPaymentCartPayload = { ...location.state };
  const { mutateAsync: postPaymentCart } = usePostPaymentCart();
  const [paymentData, setPaymentData] = useRecoilState(paymentDataState);
  const setRadioData = useSetRecoilState(radioDataState);

  useEffect(() => {
    const handlePaymentCart = async () => {
      try {
        await postPaymentCart({
          postPaymentCartPayload,
          paymentData,
          setPaymentData,
        });
      } catch (e) {
        console.log(e);
      }
    };

    handlePaymentCart();
    setRadioData({});
  }, []);

  return (
    <ReservationWrapper>
      <ReservationSummary />
      <GuestInformation />
      <ReservationPay />
    </ReservationWrapper>
  );
};

export default Reservation;
