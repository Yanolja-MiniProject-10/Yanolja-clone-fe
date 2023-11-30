import { useFetchCarts } from "../feature/cart/hooks/queries/useFetchCarts";
import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as style from "../feature/cart/styles/cart";

const Cart = () => {
  const { data: cartData, isLoading, isError } = useFetchCarts();

  isError ? console.log("에러 페이지로") : console.log("에러 없음");

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.CartWrapper>
      <SelectCartList accommodations={cartData?.accommodations} />
      <TotalSelectedPrice />
      <CartPay cartId={cartData?.cartId} />
    </style.CartWrapper>
  );
};

export default Cart;
