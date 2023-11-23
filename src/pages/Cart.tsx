import { useState } from "react";
import { RoomOption } from "../feature/cart/cart.types";
import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPay from "../feature/cart/components/TotalSelectedPay";
import ConfirmSelectedPay from "../feature/cart/components/ConfirmSelectedPay";
import { CartWrapper } from "../styles/cart";

// mock data
import { accommodationsNull, accommodations } from "../feature/cart/cart.constants";

const Cart = () => {
  const [selectedRooms, setSelectedRooms] = useState<RoomOption[]>([]);

  // react-query를 활용한 accommodations fetch

  return (
    <CartWrapper>
      <SelectCartList rooms={accommodations} selectedRooms={selectedRooms} setSelectedRooms={setSelectedRooms} />
      <TotalSelectedPay selectedRooms={selectedRooms} />
      <ConfirmSelectedPay selectedRooms={selectedRooms} />
    </CartWrapper>
  );
};

export default Cart;
