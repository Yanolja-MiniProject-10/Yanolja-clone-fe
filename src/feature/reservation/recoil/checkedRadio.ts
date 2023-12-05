import { atom } from "recoil";
import { RadioDataState } from "../reservation.types";

export const radioDataState = atom<RadioDataState>({
  key: "radioDataState",
  default: {},
});
