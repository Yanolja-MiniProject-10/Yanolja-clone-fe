import { atom } from "recoil";
import { accommodationMemberDefault } from "../../feature/accommodation/accommodation.types";

const defaultValue: accommodationMemberDefault = {
  guest: 2,
};

export const accommodationMemberState = atom({
  key: "accommodationMember",
  default: defaultValue,
});
