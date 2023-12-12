import { checkedCartRooms } from "../recoil/checkedCartRooms";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { calculateTotalPrice } from "../cart.utils";
import * as style from "../styles/cartPay";

const CartPay = ({ cartId }: { cartId: number }) => {
  const checkedRooms = useRecoilValue(checkedCartRooms);
  const cartProducts = checkedRooms.map(checkedRoom => checkedRoom.cartProductId);
  const navigation = useNavigate();

  const movetoPament = () => {
    navigation("/reservation", {
      state: {
        cartId,
        cartProducts,
      },
    });
  };

  return (
    <style.CartPayWrapper>
      <style.CartPayContents>
        <style.CartPayTitle>총 상품 금액</style.CartPayTitle>
        <style.CartPayPrice>
          {checkedRooms.length ? `${calculateTotalPrice(checkedRooms)} 원` : "0 원"}
        </style.CartPayPrice>
      </style.CartPayContents>

      <style.CartPayBtn $selectedRooms={checkedRooms.length} onClick={checkedRooms.length ? movetoPament : undefined}>
        결제하기
      </style.CartPayBtn>
    </style.CartPayWrapper>
  );
};

export default CartPay;
