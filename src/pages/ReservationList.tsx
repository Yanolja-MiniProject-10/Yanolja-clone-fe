import { useFetchPayment } from "../feature/reservationList/hooks/queries/useFetchPayment";
import PayedRooms from "../feature/reservationList/components/PayedRooms";
import * as style from "../feature/reservationList/styles/reservationList";

const ReservationList = () => {
  const { data: fetchPaymentResult, isLoading, isError } = useFetchPayment();

  isError ? console.log("에러 페이지로") : console.log("에러 없음");

  return (
    <style.ReservationListWrapper>
      {isLoading ? (
        <span>로딩중...</span>
      ) : (
        fetchPaymentResult?.map(paymentData => (
          <PayedRooms key={`accommodation-list-${paymentData.paymentId}`} paymentData={paymentData} />
        ))
      )}
    </style.ReservationListWrapper>
  );
};

export default ReservationList;