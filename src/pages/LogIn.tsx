import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../feature/login/login.types";
import { LinkWrapper } from "../feature/login/styles/login";
import { Button, Div, Form, FormItem } from "../feature/signUp/styles/signUp";

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

  // 로그인
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      // 로그인 로직
    } catch (error) {
      console.log(error);
      // 로그인 실패 로직
    }
  };

  return (
    <Div>
      <Form onSubmit={handleLogin}>
        <FormItem>
          <div>
            <label htmlFor="email">이메일</label>
          </div>
          <input type="text" id="email" value={formData.email} onChange={handleInputChange} />
        </FormItem>
        <FormItem>
          <div>
            <label>비밀번호</label>
          </div>
          <input type="password" id="password" value={formData.password} onChange={handleInputChange} />
        </FormItem>

        {/* <LoginMessage>* 이메일 또는 비밀번호가 일치하지 않습니다.</LoginMessage> */}

        <Button type="submit" disabled={formData.email === "" || formData.password === ""}>
          로그인
        </Button>

        <LinkWrapper>
          <span>야놀자 계정이 없다면?</span>
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </LinkWrapper>
      </Form>
    </Div>
  );
};

export default LogIn;
