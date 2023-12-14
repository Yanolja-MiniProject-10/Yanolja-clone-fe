import authInstance from "../../api/authInstance";

export const getUser = async () => {
  const data = await authInstance.get("/users");

  return data;
};

export const putEditUser = async (name: string) => {
  const data = await authInstance.put("/users", {
    name: name,
  });

  return data;
};
