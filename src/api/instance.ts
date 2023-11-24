import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-13-124-249-117.ap-northeast-2.compute.amazonaws.com:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
