import instance from "../../api/instance";
import { EmailCheckResponse } from "./signUp.types";

export const postCheckEmail = async (email: string): Promise<EmailCheckResponse> => {
  const { data } = await instance.post("/auth/checkEmail", {
    email,
  });

  return data;
};

export const postSignUp = async (name: string, email: string, password: string) => {
  const { data } = await instance.post("/auth/signup", {
    email,
    password,
    name,
  });

  return data;
};
