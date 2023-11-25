import { atom } from "recoil";
import { RoomOption } from "../feature/cart/cart.types";

export const checkedCartRooms = atom<RoomOption[]>({
  key: "checkedCartRooms",
  default: [],
});
