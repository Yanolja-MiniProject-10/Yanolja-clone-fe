import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { paymentDataState } from "../recoil/paymentData";
import { radioDataState } from "../recoil/checkedRadio";
import { usePostPaymentCart } from "../feature/reservation/hooks/queries/usePostPaymentCart";
import ReservationSummary from "../feature/reservation/components/ReservationSummary";
import GuestInformation from "../feature/reservation/components/GuestInformation";
import ReservationPay from "../feature/reservation/components/ReservationPay";
import { PostPaymentCartPayload } from "../feature/reservation/reservation.types";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as style from "../feature/reservation/styles/reservation";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(true);
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

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    loadingTimer;

    return () => clearInterval(loadingTimer);
  }, []);

  return isLoading || paymentData.cartId === -1 ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.ReservationWrapper>
      <ReservationSummary />
      <GuestInformation />
      <ReservationPay />
    </style.ReservationWrapper>
  );
};

export default Reservation;
