import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilValue } from "recoil";
import { calculateTotalPrice } from "../cart.utils";
import { CartPayWrapper, CartPayContents, CartPayTitle, CartPayPrice, CartPayBtn } from "../styles/cartPay";

const CartPay = () => {
  const checkedRooms = useRecoilValue(checkedCartRooms);

  return (
    <CartPayWrapper>
      <CartPayContents>
        <CartPayTitle>총 상품 금액</CartPayTitle>
        <CartPayPrice>{checkedRooms.length ? `${calculateTotalPrice(checkedRooms)} 원` : "0 원"}</CartPayPrice>
      </CartPayContents>

      <CartPayBtn
        $selectedRooms={checkedRooms.length}
        onClick={checkedRooms.length ? () => console.log("결제하기 API, 결제하기 페이지로 이동") : undefined}
      >
        결제하기
      </CartPayBtn>
    </CartPayWrapper>
  );
};

export default CartPay;
