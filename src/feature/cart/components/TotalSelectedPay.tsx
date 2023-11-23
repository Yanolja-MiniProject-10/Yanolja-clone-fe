import { RoomOption } from "../cart.types";
import { calculateTotalPrice } from "../cart.utils";
import { TotalSelectedPayWrapper, TotalPay } from "../styles/totalSelectedPay";

const TotalSelectedPay = ({ selectedRooms }: { selectedRooms: RoomOption[] }) => {
  return (
    <TotalSelectedPayWrapper>
      <strong className="total-pay-title">총 상품 금액</strong>

      <TotalPay>
        <span className="total-pay-sum">{selectedRooms.map(room => room.paymentAmount).join(" + ")} = </span>
        <span className="total-pay-price">
          {selectedRooms.length ? `${calculateTotalPrice(selectedRooms)} 원` : "0 원"}
        </span>
      </TotalPay>
    </TotalSelectedPayWrapper>
  );
};

export default TotalSelectedPay;
