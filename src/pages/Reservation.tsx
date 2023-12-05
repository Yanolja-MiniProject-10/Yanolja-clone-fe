import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { paymentDataState } from "../feature/reservation/recoil/paymentData";
import { radioDataState } from "../feature/reservation/recoil/checkedRadio";
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
  const { mutateAsync: postPaymentCart, status } = usePostPaymentCart();
  const [paymentData, setPaymentData] = useRecoilState(paymentDataState);
  const setRadioData = useSetRecoilState(radioDataState);
  const navigation = useNavigate();

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

  if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

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
