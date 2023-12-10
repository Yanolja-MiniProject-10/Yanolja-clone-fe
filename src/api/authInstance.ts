import axios from "axios";
import getLocalStorage from "../util/getLocalStorage";

const authInstance = axios.create({
  baseURL: "https://ybe-mini.site/",
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(request => {
  const { accessToken } = getLocalStorage();

  if (accessToken) {
    request.headers["Authorization"] = accessToken;
  }

  return request;
});

authInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refreshToken } = getLocalStorage();

      try {
        const res = await authInstance.post("/auth/reissues", { refreshToken });
        if (res.status === 200) {
          const { accessToken, refreshToken } = res.data.data;

          // localStorage 업데이트
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          // 요청 헤더 업데이트
          originalRequest.headers["Authorization"] = accessToken;

          return authInstance(originalRequest);
        } else {
          return Promise.reject();
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (originalRequest._retry && error.response && error.response.status === 403) {
      alert("로그인을 다시 해주세요.");
      return;
    }

    return Promise.reject(error);
  },
);

export default authInstance;
