import { atom } from "recoil";
import { AccommodationRegionDefault } from "../feature/accommodation/accommodation.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationRegionDefault = {
  region: "",
};

export const accommodationRegionState = atom({
  key: "accommodationRegion",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});
