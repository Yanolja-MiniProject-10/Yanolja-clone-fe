import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface RelatedAccommodations {
  category: string;
  region: string;
}

export const relatedAccommodationsState = atom<RelatedAccommodations>({
  key: "relatedAccommodationsState",
  default: {
    category: "",
    region: "",
  },
  effects_UNSTABLE: [persistAtom],
});
