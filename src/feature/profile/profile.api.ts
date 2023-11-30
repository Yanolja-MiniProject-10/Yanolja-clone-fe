import instance from "../../api/instance";
import getToken from "../../util/getToken";

export const getUser = async () => {
  const { accessToken, refreshToken } = getToken();

  const data = await instance.get("/users", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });

  return data;
};
