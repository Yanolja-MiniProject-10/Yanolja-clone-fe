import { atom } from "recoil";
import { accommodationMemberDefault } from "../../feature/accommodation/accommodation.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue: accommodationMemberDefault = {
  guest: 2,
};

export const accommodationMemberState = atom({
  key: "accommodationMember",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});
