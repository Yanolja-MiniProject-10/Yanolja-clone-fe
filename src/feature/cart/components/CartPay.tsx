import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilValue } from "recoil";
import { calculateTotalPrice } from "../cart.utils";
import * as style from "../styles/cartPay";

const CartPay = () => {
  const checkedRooms = useRecoilValue(checkedCartRooms);

  return (
    <style.CartPayWrapper>
      <style.CartPayContents>
        <style.CartPayTitle>총 상품 금액</style.CartPayTitle>
        <style.CartPayPrice>
          {checkedRooms.length ? `${calculateTotalPrice(checkedRooms)} 원` : "0 원"}
        </style.CartPayPrice>
      </style.CartPayContents>

      <style.CartPayBtn
        $selectedRooms={checkedRooms.length}
        onClick={checkedRooms.length ? () => console.log("결제하기 API, 결제하기 페이지로 이동") : undefined}
      >
        결제하기
      </style.CartPayBtn>
    </style.CartPayWrapper>
  );
};

export default CartPay;
