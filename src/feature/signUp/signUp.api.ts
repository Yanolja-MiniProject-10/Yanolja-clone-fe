import instance from "../../api/instance";
import { EmailCheckResponse } from "./signUp.types";

export const postCheckEmail = async (email: string): Promise<EmailCheckResponse> => {
  const { data } = await instance.post("/auth/checkEmail", {
    email,
  });

  return data;
};

export const postSignUp = async (email: string, password: string, name: string) => {
  const { data } = await instance.post("/auth/signup", {
    email: email,
    password: password,
    name: name,
  });

  return data;
};
