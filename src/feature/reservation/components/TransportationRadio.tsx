import { useRecoilState } from "recoil";
import { radioDataState } from "../recoil/checkedRadio";
import { RoomOption } from "../../../types";
import * as style from "../styles/transportationRadio";

const TransportationRadio = ({ roomOption }: { roomOption: RoomOption }) => {
  const [radioData, setRadioData] = useRecoilState(radioDataState);

  const handleRadioChange = (cartProductId: number, radioInput: "차량" | "도보") => {
    setRadioData(prevData => ({
      ...prevData,
      [cartProductId]: {
        cartProductId: cartProductId,
        transportation: radioInput,
      },
    }));
  };

  return (
    <style.RadioWrapper>
      <style.RadioTitle>방문 수단을 선택해 주세요. *</style.RadioTitle>
      <style.LabelWrapper>
        <style.RadioLabel>
          <input
            type="radio"
            name={`transportation-${roomOption.cartProductId}`}
            value="차량"
            checked={radioData[roomOption.cartProductId]?.transportation === "차량"}
            onChange={() => handleRadioChange(roomOption.cartProductId, "차량")}
          />
          <span>차량</span>
        </style.RadioLabel>
        <style.RadioLabel>
          <input
            type="radio"
            name={`transportation-${roomOption.cartProductId}`}
            value="도보"
            checked={radioData[roomOption.cartProductId]?.transportation === "도보"}
            onChange={() => handleRadioChange(roomOption.cartProductId, "도보")}
          />
          <span>도보</span>
        </style.RadioLabel>
      </style.LabelWrapper>
    </style.RadioWrapper>
  );
};

export default TransportationRadio;
