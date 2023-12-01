import { useNavigate } from "react-router-dom";
import { useFetchCarts } from "../feature/cart/hooks/queries/useFetchCarts";
import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as style from "../feature/cart/styles/cart";

const Cart = () => {
  const { data: cartData, isLoading, status } = useFetchCarts();
  const navigation = useNavigate();

  if (status === "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
    return null;
  }

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
