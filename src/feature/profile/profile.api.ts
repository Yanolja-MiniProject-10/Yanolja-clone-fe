import authInstance from "../../api/authInstance";
import getLocalStorage from "../../util/getLocalStorage";

export const getUser = async () => {
  const { accessToken, refreshToken } = getLocalStorage();

  const data = await authInstance.get("/users", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });

  return data;
};
