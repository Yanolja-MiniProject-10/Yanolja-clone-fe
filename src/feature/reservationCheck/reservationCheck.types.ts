import { CartData } from "../../types";

export interface RadioDataState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  [key: number]: {
    cartProductId: number;
    transportation: "차량" | "도보";
  };
}

export interface ReservationCheckData {
  paymentData: CartData;
  radioDataArray: RadioDataState;
}
