import { atom } from "recoil";
import { accommodationMemberDefault } from "../../feature/accommodation/accommodation.types";

const defaultValue: accommodationMemberDefault = {
  memberNumber: 2,
};
export const accommodationMemberState = atom({
  key: "accommodationMember",
  default: defaultValue,
});
