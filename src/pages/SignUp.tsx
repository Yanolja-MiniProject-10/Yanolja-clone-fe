import { useCallback, useEffect, useState } from "react";
import { FormData } from "../feature/signUp/signUp.types";
import { Button, Div, EmailButton, Form, FormItem, Message } from "../feature/signUp/styles/signUp";

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 에러 메시지
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 성공 메시지
  const [success, setSuccess] = useState({
    email: "",
    confirmPassword: "",
  });

  const [isChanged, setIsChanged] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isValid, setIsValid] = useState<boolean>(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmAPassword] = useState<boolean>(false);
  const [hasCheckedEmail, setHasCheckedEmail] = useState<boolean>(false); // 이메일 체크 여부

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setIsChanged({ ...isChanged, [id]: true });
    setHasCheckedEmail(false);
    setIsConfirmEmail(false);
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

    const newSuccess = {
      email: "",
      confirmPassword: "",
    };

    // 모든 값 입력 여부 확인
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
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
    if (formData.email) {
      if (isConfirmEmail) {
        newErrors.email = "";
        newSuccess.email = "* 사용가능한 이메일입니다.";
      } else {
        newErrors.email = "* 이미 사용중인 이메일입니다.";
        isValid = false;
      }
    }

    // 비밀번호 유효성 검사
    if (formData.password.trim() !== "") {
      if (formData.password.length < 5) {
        newErrors.password = "* 비밀번호는 5자 이상으로 입력해주세요.";
        isValid = false;
      }
    }

    // 비밀번호 일치 검사
    if (formData.confirmPassword) {
      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "* 비밀번호가 일치하지 않습니다.";
        isValid = false;
        setIsConfirmAPassword(false);
      } else {
        newErrors.confirmPassword = "";
        newSuccess.confirmPassword = "* 비밀번호가 일치합니다.";
        setIsConfirmAPassword(true);
      }
    }

    setErrors(newErrors);
    setSuccess(newSuccess);
    setIsValid(isValid);
    return isValid;
  }, [formData, isConfirmEmail]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  // 이메일 중복 확인
  const handleDuplicateEmail = (email: string) => {
    setHasCheckedEmail(true);
    // 중복 확인 로직
    if (email) {
      setIsConfirmEmail(true);
    } else {
      setIsConfirmEmail(false);
    }
  };

  // 회원가입
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      // 회원가입 로직
    } catch (error) {
      console.log(error);
      // 회원가입 실패 로직
    }
  };

  return (
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
              {hasCheckedEmail &&
                (isConfirmEmail ? (
                  <Message $isconfirm={isConfirmEmail}>{success.email}</Message>
                ) : (
                  <Message>{errors.email}</Message>
                ))}
            </div>
            <EmailButton
              type="button"
              $isconfirm={hasCheckedEmail}
              onClick={() => {
                void handleDuplicateEmail(formData.email);
              }}
            >
              중복확인
            </EmailButton>
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
            {isConfirmPassword ? (
              <Message $isconfirm={isConfirmPassword}>{success.confirmPassword}</Message>
            ) : (
              <Message>{errors.confirmPassword}</Message>
            )}
          </div>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </FormItem>
        <Button type="submit" disabled={!isValid}>
          회원가입
        </Button>
      </Form>
    </Div>
  );
};

export default SignUp;
