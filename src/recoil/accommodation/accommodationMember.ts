import { atom } from "recoil";

interface accommodationMemberDefault {
  memberNumber: number;
}

const defaultValue: accommodationMemberDefault = {
  memberNumber: 2,
};
export const accommodationMemberState = atom({
  key: "accommodationMember",
  default: defaultValue,
});
