import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilValue } from "recoil";
import { calculateTotalPrice } from "../cart.utils";
import {
  TotalSelectedPriceWrapper,
  TotalPrice,
  TotalPriceTitle,
  TotalPriceSum,
  TotalPricePrice,
} from "../styles/totalSelectedPrice";

const TotalSelectedPrice = () => {
  const checkedRooms = useRecoilValue(checkedCartRooms);

  return (
    <TotalSelectedPriceWrapper>
      <TotalPriceTitle>총 상품 금액</TotalPriceTitle>

      <TotalPrice>
        <TotalPriceSum>
          {checkedRooms.map(room => (room.pricePerNight * room.stayDuration).toLocaleString()).join(" + ")}
          {" = "}
        </TotalPriceSum>
        <TotalPricePrice>{checkedRooms.length ? `${calculateTotalPrice(checkedRooms)} 원` : "0 원"}</TotalPricePrice>
      </TotalPrice>
    </TotalSelectedPriceWrapper>
  );
};

export default TotalSelectedPrice;
