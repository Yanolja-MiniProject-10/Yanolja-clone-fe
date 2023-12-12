import { atom } from "recoil";
import { CartData } from "../../../types";
import { PAYMENT_DATA_DEFAULT } from "../reservation.constants";

export const paymentDataState = atom<CartData>({
  key: "paymentDataState",
  default: PAYMENT_DATA_DEFAULT,
});
