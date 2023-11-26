import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { useFetchCarts } from "../feature/cart/cart.queries";
import { CartWrapper } from "../styles/cart";

const Cart = () => {
  const { data, isLoading, isError } = useFetchCarts();

  isLoading ? console.log("로딩중") : console.log("로딩끝");

  return (
    <CartWrapper>
      <SelectCartList accomodations={isError ? null : data?.accommodations} />
      <TotalSelectedPrice />
      <CartPay />
    </CartWrapper>
  );
};

export default Cart;
