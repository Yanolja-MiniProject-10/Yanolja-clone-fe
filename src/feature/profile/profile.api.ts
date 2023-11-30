import instance from "../../api/instance";

interface User {
  accessToken: string;
  refreshToken: string;
}

export const getUser = async ({ accessToken, refreshToken }: User) => {
  const data = await instance.get("/users", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });

  return data;
};
