import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { useFetchCarts } from "../feature/cart/hooks/queries/useFetchCarts";
import * as style from "../styles/cart";

const Cart = () => {
  const { data: cartData, isLoading, isError } = useFetchCarts();

  isLoading ? console.log("로딩중") : console.log("로딩끝");

  return (
    <style.CartWrapper>
      <SelectCartList accomodations={isError ? null : cartData?.accommodations} />
      <TotalSelectedPrice />
      <CartPay />
    </style.CartWrapper>
  );
};

export default Cart;
