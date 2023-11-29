import { useRecoilValue } from "recoil";
import { radioDataState } from "../../../recoil/checkedRadio";
import { useLocation, useNavigate } from "react-router-dom";
import { RadioDataState, ReservationLocationsState } from "../reservation.types";
import { PayBtn } from "../styles/reservationPayBtn";
import { usePostPurchase } from "../hooks/queries/usePostPurchase";

const ReservationPayBtn = ({ allChecked }: { allChecked: boolean }) => {
  const radioData = useRecoilValue(radioDataState);
  const radioDataArray: RadioDataState[] = Object.values(radioData);
  const location = useLocation();

  const ReservationInfo: ReservationLocationsState = { ...location.state };
  const { mutateAsync: postPurchase } = usePostPurchase();

  const navigation = useNavigate();

  const postPurchasePayload = {
    cartId: ReservationInfo.cartId,
    cartProducts: radioDataArray,
  };

  const handlePurchase = async () => {
    try {
      const data = await postPurchase(postPurchasePayload);

      if (data === "SUCCESS") {
        navigation("/reservation-list");
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PayBtn
      $allChecked={allChecked && ReservationInfo.cartProducts.length === radioDataArray.length}
      onClick={allChecked && ReservationInfo.cartProducts.length === radioDataArray.length ? handlePurchase : undefined}
    >
      결제하기
    </PayBtn>
  );
};

export default ReservationPayBtn;
