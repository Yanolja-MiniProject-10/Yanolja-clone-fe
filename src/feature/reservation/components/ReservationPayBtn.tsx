import { useRecoilValue } from "recoil";
import { radioDataState } from "../../../recoil/checkedRadio";
import { useLocation } from "react-router-dom";
import { RadioDataState } from "../reservation.types";
import { PayBtn } from "../styles/reservationPayBtn";

const ReservationPayBtn = ({ allChecked }: { allChecked: boolean }) => {
  const radioData = useRecoilValue(radioDataState);
  const radioDataArray: RadioDataState[] = Object.values(radioData);
  const location = useLocation();
  const userInfo = { ...location.state };

  console.log(radioDataArray);

  return (
    <PayBtn
      $allChecked={allChecked && userInfo.cartProducts.length === radioDataArray.length}
      onClick={
        allChecked && userInfo.cartProducts.length === radioDataArray.length
          ? () => {
              console.log("결제하기 API");
              console.log({
                cartId: userInfo.cartId,
                cartProducts: radioDataArray,
              });
            }
          : undefined
      }
    >
      결제하기
    </PayBtn>
  );
};

export default ReservationPayBtn;
