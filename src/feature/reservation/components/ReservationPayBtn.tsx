import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { radioDataState } from "../../../recoil/checkedRadio";
import { paymentDataState } from "../../../recoil/paymentData";
import { usePostPurchase } from "../hooks/queries/usePostPurchase";
import { RadioDataState, ReservationLocationsState } from "../reservation.types";
import { CartData } from "../../../types";
import * as style from "../styles/reservationPayBtn";

const ReservationPayBtn = ({ allChecked }: { allChecked: boolean }) => {
  const radioData = useRecoilValue(radioDataState);
  const radioDataArray: RadioDataState[] = Object.values(radioData);

  const location = useLocation();
  const ReservationInfo: ReservationLocationsState = { ...location.state };
  const { mutateAsync: postPurchase, status } = usePostPurchase();

  const navigation = useNavigate();
  const paymentData: CartData = useRecoilValue(paymentDataState);
  const postPurchasePayload = {
    cartId: ReservationInfo.cartId,
    cartProducts: radioDataArray,
  };

  if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

  const handlePurchase = async () => {
    try {
      const data = await postPurchase(postPurchasePayload);

      if (data === "SUCCESS") {
        navigation("/reservation-check", { state: { paymentData, radioDataArray } });
      } else {
        throw new Error();
      }
    } catch (e) {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
      return null;
    }
  };

  return (
    <>
      {allChecked && ReservationInfo.cartProducts.length === radioDataArray.length ? (
        <style.PrePayCondition></style.PrePayCondition>
      ) : (
        <style.PrePayCondition>* 방문 수단과 결제 전 확인 사항은 필수 항목입니다.</style.PrePayCondition>
      )}
      <style.PayBtn
        $allChecked={allChecked && ReservationInfo.cartProducts.length === radioDataArray.length}
        onClick={
          allChecked && ReservationInfo.cartProducts.length === radioDataArray.length ? handlePurchase : undefined
        }
      >
        결제하기
      </style.PayBtn>
    </>
  );
};

export default ReservationPayBtn;
