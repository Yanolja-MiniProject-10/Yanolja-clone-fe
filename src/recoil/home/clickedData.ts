import { atom } from "recoil";

export const relatedAccommodationsState = atom({
  key: "relatedAccommodationsState",
  default: {
    category: "",
    region: "",
  },
});
