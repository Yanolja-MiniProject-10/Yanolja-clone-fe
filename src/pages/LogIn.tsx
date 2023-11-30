import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../feature/login/login.api";
import { FormData } from "../feature/login/login.types";
import * as style from "../feature/login/styles/login";
import * as commonStyle from "../feature/signUp/styles/signUp";
import { userState } from "../recoil/userData";
import { useSetRecoilState } from "recoil";

const LogIn = () => {
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // 로그인
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
    e.preventDefault();
    setIsUser(true);

    try {
      const data = await postLogin(email, password);

      if (data.status === 200) {
        alert("로그인되었습니다.");
        setUserState({
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        });
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        navigate("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          setIsUser(false);
        } else {
          alert("로그인에 실패하였습니다.");
        }
      }
      console.error(error);
    }
  };

  return (
    <commonStyle.Div>
      <commonStyle.Form onSubmit={e => handleLogin(e, formData.email, formData.password)}>
        <commonStyle.FormItem>
          <div>
            <label htmlFor="email">이메일</label>
          </div>
          <input type="text" id="email" value={formData.email} onChange={handleInputChange} />
        </commonStyle.FormItem>
        <commonStyle.FormItem>
          <div>
            <label>비밀번호</label>
          </div>
          <input type="password" id="password" value={formData.password} onChange={handleInputChange} />
        </commonStyle.FormItem>

        {!isUser && <style.LoginMessage>* 이메일 또는 비밀번호가 일치하지 않습니다.</style.LoginMessage>}

        <commonStyle.Button type="submit" disabled={formData.email === "" || formData.password === ""}>
          로그인
        </commonStyle.Button>

        <style.LinkWrapper>
          <span>야놀자 계정이 없다면?</span>
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </style.LinkWrapper>
      </commonStyle.Form>
    </commonStyle.Div>
  );
};

export default LogIn;
