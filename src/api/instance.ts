import axios from "axios";
import getToken from "../util/getToken";

const instance = axios.create({
  baseURL: "https://ybe-mini.site/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(request => {
  const { accessToken, refreshToken } = getToken();

  if (accessToken) {
    request.headers["accessToken"] = accessToken;
  }
  if (refreshToken) {
    request.headers["refreshToken"] = refreshToken;
  }
  return request;
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refreshToken } = getToken();

      try {
        const res = await instance.post("/auth/reissues", { refreshToken });
        if (res.status === 200) {
          const { accessToken, refreshToken } = res.data.data;

          // localStorage 업데이트
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          // 요청 헤더 업데이트
          originalRequest.headers["accessToken"] = accessToken;
          originalRequest.headers["refreshToken"] = refreshToken;

          return instance(originalRequest);
        } else {
          return Promise.reject();
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (originalRequest._retry && error.response && error.response.status === 403) {
      alert("로그인을 다시 해주세요.");
    }

    return Promise.reject(error);
  },
);

export default instance;
