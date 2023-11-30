import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userState", // 이 key로 localStorage에 저장됩니다.
  storage: localStorage, // 사용할 스토리지를 지정합니다.
});

export const userState = atom({
  key: "userState",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});
