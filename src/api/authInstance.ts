import axios from "axios";
import getToken from "../util/getToken";
import instance from "./instance";

const authInstance = axios.create({
  baseURL: "https://ybe-mini.site/",
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(request => {
  const { accessToken, refreshToken } = getToken();

  if (accessToken) {
    request.headers["accessToken"] = accessToken;
  }
  if (refreshToken) {
    request.headers["refreshToken"] = refreshToken;
  }
  return request;
});

authInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // 재시도 횟수 추적을 위한 초기화
    if (!originalRequest.retryCount) {
      originalRequest.retryCount = 0;
    }

    // 토큰 재발급과 재시도 로직
    if (error.response && error.response.status === 403 && originalRequest.retryCount < 2) {
      originalRequest.retryCount++;
      const { refreshToken } = getToken();

      try {
        const res = await instance.post("/auth/reissues", { refreshToken });
        if (res.status === 200) {
          const { accessToken, refreshToken } = res.data.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          originalRequest.headers["accessToken"] = accessToken;
          originalRequest.headers["refreshToken"] = refreshToken;

          return authInstance(originalRequest);
        } else {
          return Promise.reject();
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // 재시도 횟수 초과 시 로그인 재요청
    if (originalRequest.retryCount >= 2 && error.response && error.response.status === 403) {
      alert("로그인을 다시 해주세요.");
    }

    return Promise.reject(error);
  },
);

export default authInstance;
