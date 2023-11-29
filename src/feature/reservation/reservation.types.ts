import { SetterOrUpdater } from "recoil";
import { RoomOption, CartData } from "../../types";

export interface PostPaymentCartPayload {
  cartId: number;
  cartProducts: RoomOption["cartProductId"][];
}

export interface PostPaymentCart {
  postPaymentCartPayload: PostPaymentCartPayload;
  paymentData: CartData;
  setPaymentData: SetterOrUpdater<CartData>;
}

export interface PostPaymentCartResult {
  status: number;
  message: string;
  data: CartData;
}

export interface RadioDataState {
  [key: number]: {
    cartProductId: number;
    transportation: "차량" | "도보";
  };
}
