import { checkedCartRooms } from "../recoil/checkedCartRooms";
import { useRecoilValue } from "recoil";
import { calculateTotalPrice } from "../cart.utils";
import * as style from "../styles/totalSelectedPrice";

const TotalSelectedPrice = () => {
  const checkedRooms = useRecoilValue(checkedCartRooms);

  return (
    <style.TotalSelectedPriceWrapper>
      <style.TotalPriceTitle>총 상품 금액</style.TotalPriceTitle>

      <style.TotalPrice>
        <style.TotalPriceSum>
          {checkedRooms.map(room => (room.pricePerNight * room.stayDuration).toLocaleString()).join(" + ")}
          {" = "}
        </style.TotalPriceSum>
        <style.TotalPricePrice>
          {checkedRooms.length ? `${calculateTotalPrice(checkedRooms)} 원` : "0 원"}
        </style.TotalPricePrice>
      </style.TotalPrice>
    </style.TotalSelectedPriceWrapper>
  );
};

export default TotalSelectedPrice;
