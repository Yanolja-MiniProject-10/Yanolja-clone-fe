import { atom } from "recoil";
import { AccommodationDateDefault } from "../feature/accommodation/accommodation.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const defaultValue: AccommodationDateDefault = {
  startDate: new Date(),
  endDate: tomorrow,
};

export const accommodationDateState = atom({
  key: "accommodationDate",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});
