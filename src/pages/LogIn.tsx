import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../feature/login/login.types";
import * as style from "../feature/login/styles/login";
import * as commonStyle from "../feature/signUp/styles/signUp";
import { postLogin } from "../feature/login/login.api";
import instance from "../api/instance";

const LogIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // user 정보 가져오기
  const handleGetUser = async () => {
    try {
      const { data } = await instance.get("/users", {
        withCredentials: true,
      });
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // // 쿠키에 액세스 토큰과 리프레시 토큰을 저장
  const setCookie = (name: string, value: string, daysToLive: number) => {
    // 쿠키 만료 날짜 설정
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;

    // 쿠키 설정
    document.cookie = `${name}=${value}; ${expires}; path=/; secure; samesite=none`;
  };

  // 쿠키를 삭제하는 함수
  // const deleteCookie = (name: string) => {
  //   // 과거 날짜를 설정하여 쿠키 만료
  //   document.cookie = `${name}=; domain=ybe-mini.site; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=none`;
  // };

  // 로그인
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
    e.preventDefault();

    try {
      const data = await postLogin(email, password);
      console.log(data);

      if (data.status === 200) {
        alert("로그인되었습니다.");
        // 액세스 토큰과 리프레시 토큰을 각각의 쿠키로 설정합니다.
        setCookie("access-token", data.data.access_token, 1); // 1일 후에 만료되는 액세스 토큰 쿠키
        setCookie("refresh-token", data.data.refresh_token, 7); // 7일 후에 만료되는 리프레시 토큰 쿠키
        console.log(document.cookie);
      } else if (data.status === 401) {
        alert("가입된 정보가 없습니다.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (error) {
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

        {/* <LoginMessage>* 이메일 또는 비밀번호가 일치하지 않습니다.</LoginMessage> */}

        <commonStyle.Button type="submit" disabled={formData.email === "" || formData.password === ""}>
          로그인
        </commonStyle.Button>

        <style.LinkWrapper>
          <span>야놀자 계정이 없다면?</span>
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </style.LinkWrapper>

        <button type="button" onClick={handleGetUser}>
          GET USER
        </button>
      </commonStyle.Form>
    </commonStyle.Div>
  );
};

export default LogIn;
