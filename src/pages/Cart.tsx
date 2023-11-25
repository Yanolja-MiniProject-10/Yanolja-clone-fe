import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { CartWrapper } from "../styles/cart";

// mock data
import { accommodations } from "../feature/cart/cart.constants";

const Cart = () => {
  return (
    <CartWrapper>
      <SelectCartList accomodations={accommodations} />
      <TotalSelectedPrice />
      <CartPay />
    </CartWrapper>
  );
};

export default Cart;
