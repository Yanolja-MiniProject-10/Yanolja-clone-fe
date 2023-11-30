import axios from "axios";
import getToken from "../util/getToken";
const { accessToken, refreshToken } = getToken();

const authInstance = axios.create({
  baseURL: "https://ybe-mini.site/",
  headers: {
    "Content-Type": "application/json",
    accessToken: accessToken,
    refreshToken: refreshToken,
  },
});

export default authInstance;
