import authInstance from "../../api/authInstance";

export const getUser = async () => {
  const data = await authInstance.get("/users");

  return data;
};
