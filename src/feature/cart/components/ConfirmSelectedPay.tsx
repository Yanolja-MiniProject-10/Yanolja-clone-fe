import { RoomOption } from "../cart.types";
import { calculateTotalPrice } from "../cart.utils";
import { ConfirmPayWrapper, ConfirmPay } from "../styles/confirmPay";

const ConfirmSelectedPay = ({ selectedRooms }: { selectedRooms: RoomOption[] }) => {
  return (
    <ConfirmPayWrapper $selectedRooms={selectedRooms.length}>
      <ConfirmPay>
        <strong className="confirm-pay-title">총 상품 금액</strong>
        <span className="confirm-pay-price">
          {selectedRooms.length ? `${calculateTotalPrice(selectedRooms)} 원` : "0 원"}
        </span>
      </ConfirmPay>

      <button
        onClick={selectedRooms.length ? () => console.log("결제하기 API, 결제하기 페이지로 이동") : undefined}
        className="confirm-pay-btn"
      >
        결제하기
      </button>
    </ConfirmPayWrapper>
  );
};

export default ConfirmSelectedPay;
