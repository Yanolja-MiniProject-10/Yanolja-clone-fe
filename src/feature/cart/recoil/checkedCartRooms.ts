import { atom } from "recoil";
import { RoomOption } from "../../../types";

export const checkedCartRooms = atom<RoomOption[]>({
  key: "checkedCartRooms",
  default: [],
});
