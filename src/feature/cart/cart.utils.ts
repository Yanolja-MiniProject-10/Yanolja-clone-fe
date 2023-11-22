import { RoomOption } from "./cart.types";

export const calculateTotalPrice = (selectedItems: RoomOption[]) => {
  return selectedItems.reduce((total, item) => total + item.paymentAmount, 0);
};
