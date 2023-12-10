import authInstance from "../../api/authInstance";
import getLocalStorage from "../../util/getLocalStorage";

export const getUser = async () => {
  const { accessToken } = getLocalStorage();

  const data = await authInstance.get("/users", {
    headers: {
      Authorization: accessToken,
    },
  });

  return data;
};
