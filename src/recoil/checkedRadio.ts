import { atom } from "recoil";
import { RadioDataState } from "../feature/reservation/reservation.types";

export const radioDataState = atom<RadioDataState>({
  key: "radioDataState",
  default: {},
});
