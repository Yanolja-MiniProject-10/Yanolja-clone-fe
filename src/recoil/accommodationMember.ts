import { atom } from "recoil";
import { AccommodationMemberDefault } from "../feature/accommodation/accommodation.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationMemberDefault = {
  guest: 2,
};

export const accommodationMemberState = atom({
  key: "accommodationMember",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});
