import { atom } from "recoil";
import { accommodationDateDefault } from "../../feature/accommodation/accommodation.types";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const defaultValue: accommodationDateDefault = {
  startDate: new Date(),
  endDate: tomorrow,
};

export const accommodationDateState = atom({
  key: "accommodationDate",
  default: defaultValue,
});
