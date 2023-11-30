import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});
