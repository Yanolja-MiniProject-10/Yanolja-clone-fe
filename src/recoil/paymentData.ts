import { atom } from "recoil";
import { CartData } from "../types";

export const paymentDataState = atom<CartData>({
  key: "paymentDataState",
  default: {
    cartId: -1,
    count: -1,
    accommodations: [
      {
        accommodationId: -1,
        name: "",
        address: "",
        thumbnailImageUrl: "",
        roomOptions: [
          {
            cartProductId: -1,
            roomOptionId: -1,
            name: "",
            thumbnailImage: "",
            capacity: -1,
            pricePerNight: -1,
            totalPrice: -1,
            reservationStartDate: "",
            reservationEndDate: "",
            stayDuration: -1,
            transportation: "",
          },
        ],
      },
    ],
  },
});
