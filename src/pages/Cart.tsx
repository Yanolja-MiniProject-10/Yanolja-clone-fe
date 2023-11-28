import { useFetchCarts } from "../feature/cart/hooks/queries/useFetchCarts";
import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import * as style from "../styles/cart";

const Cart = () => {
  const { data: cartData, isLoading, isError } = useFetchCarts();

  isLoading ? console.log("로딩중") : console.log("로딩끝");
  isError ? console.log("에러 페이지로") : console.log("에러 없음");

  return (
    <style.CartWrapper>
      <SelectCartList accommodations={cartData?.accommodations} />
      <TotalSelectedPrice />
      <CartPay cartId={cartData?.cartId} />
    </style.CartWrapper>
  );
};

export default Cart;
