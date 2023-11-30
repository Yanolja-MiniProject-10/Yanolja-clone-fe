import { CartData } from "../../types";
import { RadioDataState } from "./reservationCheck.types";

export const updateTransportation = (cartData: CartData, radioData: RadioDataState): CartData => {
  const newCartData: CartData = { ...cartData };

  newCartData.accommodations.forEach(accommodation => {
    accommodation.roomOptions.forEach(roomOption => {
      const { cartProductId } = roomOption;

      radioData.forEach((data: { cartProductId: number; transportation: string | undefined }) => {
        if (data.cartProductId === cartProductId) {
          roomOption.transportation = data.transportation;
        }
      });
    });
  });

  return newCartData;
};
