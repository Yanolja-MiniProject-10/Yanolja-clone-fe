import { useNavigate } from "react-router-dom";
import { useFetchPayment } from "../feature/reservationList/hooks/queries/useFetchPayment";
import PayedRooms from "../feature/reservationList/components/PayedRooms";
import * as style from "../feature/reservationList/styles/reservationList";
import { Loading, LoadingWrapper } from "../styles/loading";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/userData";
import { useEffect, useState } from "react";

const ReservationList = () => {
  const setUser = useSetRecoilState(userState);

  const { data: fetchPaymentResult, isLoading, error, status } = useFetchPayment();
  const navigation = useNavigate();

  const [isFirst403Error, setIsFirst403Error] = useState(true);

  useEffect(() => {
    if (status === "error") {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 403 && isFirst403Error) {
          // 첫 번째 403 에러일 때는 무시
          setIsFirst403Error(false);
        } else if (
          error.response.status === 401 ||
          error.response.status === 405 ||
          (error.response.status === 403 && !isFirst403Error)
        ) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          window.alert("인증 오류가 발생했습니다. 로그인을 다시 해주세요.");
          navigation("/login");
        } else {
          window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
          navigation("/");
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigation("/");
      }
    }

    return () => {
      setIsFirst403Error(true);
    };
  }, [error, status, isFirst403Error, setUser]);

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
