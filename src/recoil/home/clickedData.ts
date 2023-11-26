import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const relatedAccommodationsState = atom({
  key: "relatedAccommodationsState",
  default: {
    category: "",
    region: "",
  },
  effects_UNSTABLE: [persistAtom],
});
