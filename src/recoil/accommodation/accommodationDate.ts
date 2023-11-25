import { atom } from "recoil";

interface accommodationDateDefault {
  startDate: Date;
  endDate: Date;
}

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
