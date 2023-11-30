import axios from "axios";

const instance = axios.create({
  baseURL: "https://ybe-mini.site/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
