import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 90px;
`;

const Div = styled.div`
  width: 90%;
  margin: 30px auto 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  > div {
    margin-bottom: 16px;
    display: flex;
    align-items: flex-end;
    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-item: center;
    }
    label {
      width: 100%;
      margin-right: 10px;
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${({ theme }) => theme.fontSize.sm};
      white-spacing: nowrap;
    }
  }
  > input {
    padding: 8px 5px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.xs};

    &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.color.black};
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.darkGray};
      font-weight: 400;
    }
  }
  button {
    padding: 8px 18px 6px 18px;
    color: ${({ theme }) => theme.color.mainPink};
    border-radius: ${({ theme }) => theme.box.radius};
    border: 1px solid ${({ theme }) => theme.color.mainPink};
    background-color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
    white-space: nowrap;
    &:hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.red};
`;

const Button = styled.button<Props>`
  margin-top: 20px;
  padding: 18px;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: ${({ theme }) => theme.box.radius};
  background-color: ${props =>
    props.disabled ? ({ theme }) => theme.color.middleGray : ({ theme }) => theme.color.mainPink};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  disabled: boolean;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isChanged, setIsChanged] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setIsChanged({ ...isChanged, [id]: true });
    setIsValid(validateForm());
  };

  const validateForm = useCallback((): boolean => {
    let isValid = true;

    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // 모든 값 입력 여부 확인
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      isValid = false;
    }

    // 이름 유효성 검사
    if (formData.name.trim() !== "") {
      if (formData.name.length < 2 || formData.name.length > 20) {
        newErrors.name = "* 이름은 2글자 이상 10글자 이하로 입력해주세요.";
        isValid = false;
      } else if (!/^[a-zA-Z0-9가-힣]+$/.test(formData.name)) {
        newErrors.name = "* 이름에는 특수 문자가 포함될 수 없습니다.";
        isValid = false;
      }
    }

    // 이메일 유효성 검사
    // if (// 중복체크) {
    //   newErrors.email = "* 이미 사용중인 이메일입니다.";
    //   isValid = false;
    // }

    // 비밀번호 유효성 검사
    if (formData.password.trim() !== "") {
      if (formData.password.length < 6) {
        newErrors.password = "* 비밀번호는 5자 이상으로 입력해주세요.";
        isValid = false;
      }
    }

    // 비밀번호 일치 검사
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "* 비밀번호가 일치하지 않습니다.";
      isValid = false;
    }

    setErrors(newErrors);
    setIsValid(isValid);
    return isValid;
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  // 회원가입
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      try {
        // 회원가입 로직
      } catch {
        // 회원가입 실패 로직
      }
    }
  };

  return (
    <>
      <Header>회원가입</Header>
      <Div>
        <Form onSubmit={handleSignup}>
          <FormItem>
            <div>
              <label htmlFor="name">이름</label>
              <Message>{errors.name}</Message>
            </div>
            <input type="text" id="name" placeholder="ex) 야놀자" value={formData.name} onChange={handleInputChange} />
          </FormItem>
          <FormItem>
            <div>
              <div>
                <label htmlFor="email">이메일</label>
                <Message>{errors.email}</Message>
              </div>
              <button type="button">중복확인</button>
            </div>
            <input
              type="email"
              id="email"
              placeholder="ex) yanolja@yanolja.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormItem>
          <FormItem>
            <div>
              <label htmlFor="password">비밀번호</label>
              <Message>{errors.password}</Message>
            </div>
            <input type="password" id="password" value={formData.password} onChange={handleInputChange} />
          </FormItem>
          <FormItem>
            <div>
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <Message>{errors.confirmPassword}</Message>
            </div>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          </FormItem>
          <Button type="submit" disabled={!isValid}>
            회원가입
          </Button>
        </Form>
      </Div>
    </>
  );
};

export default SignUp;
