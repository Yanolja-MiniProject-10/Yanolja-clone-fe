import instance from "../../api/instance";

export const postLogin = async (email: string, password: string) => {
  const { data } = await instance.post("/auth/login", {
    email: email,
    password: password,
  });

  return data;
};
