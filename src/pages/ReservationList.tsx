import { useNavigate } from "react-router-dom";
import { useFetchPayment } from "../feature/reservationList/hooks/queries/useFetchPayment";
import PayedRooms from "../feature/reservationList/components/PayedRooms";
import * as style from "../feature/reservationList/styles/reservationList";
import { Loading, LoadingWrapper } from "../styles/loading";

const ReservationList = () => {
  const { data: fetchPaymentResult, isLoading, status } = useFetchPayment();
  const navigation = useNavigate();

  if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.ReservationListWrapper>
      {fetchPaymentResult?.map(paymentData => (
        <PayedRooms key={`accommodation-list-${paymentData.paymentId}`} paymentData={paymentData} />
      ))}
    </style.ReservationListWrapper>
  );
};

export default ReservationList;
