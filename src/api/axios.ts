import axios from "axios";

const instance = axios.create({
  baseURL: "https://ybe-mini.site",
});

export default instance;
