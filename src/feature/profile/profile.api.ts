import authInstance from "../../api/authInstance";

interface User {
  accessToken: string;
  refreshToken: string;
}

export const getUser = async ({ accessToken, refreshToken }: User) => {
  const data = await authInstance.get("/users", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });

  return data;
};
