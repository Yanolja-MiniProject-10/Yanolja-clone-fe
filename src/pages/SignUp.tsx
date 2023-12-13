import { useCallback, useEffect, useState } from "react";
import { postCheckEmail, postSignUp } from "../feature/signUp/signUp.api";
import { FormData } from "../feature/signUp/signUp.types";
import * as style from "../feature/signUp/styles/signUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

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
  const [isConfirmEmail, setIsConfirmEmail] = useState<boolean>(false); // 이메일 유효성 여부
  const [isEmailUnique, setIsEmailUnique] = useState<boolean>(false); // 이메일 중복 여부
  const [hasEmailCheck, setHasEmailCheck] = useState<boolean>(false); // 이메일 중복 확인 여부
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false); // 비밀번호 일치 여부

  const [isSubmitting, setIsSubmitting] = useState(false); // 회원가입 제출 여부 확인

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
    setIsChanged({ ...isChanged, [id]: true });

    if (id === "email") {
      setIsValid(false);
      setIsConfirmEmail(false);
      setIsEmailUnique(false);
      setHasEmailCheck(false);
    }

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
      // 이메일 중복 검사
      if (!isEmailUnique) {
        isValid = false;
      }

      if (!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}$/.test(formData.email)) {
        setIsConfirmEmail(false);
        newErrors.email = "* 올바른 이메일 형식이 아닙니다.";
        isValid = false;
      } else {
        setIsConfirmEmail(true);

        if (hasEmailCheck) {
          if (isEmailUnique === false) {
            newErrors.email = "* 이미 사용중인 이메일입니다.";
            setIsEmailUnique(false);
            isValid = false;
          } else {
            newSuccess.email = "* 사용 가능한 이메일입니다.";
          }
        }
      }
    }

    // 비밀번호 유효성 검사
    if (formData.password.trim() !== "") {
      if (formData.password.length < 5) {
        newErrors.password = "* 비밀번호는 5자 이상으로 입력해주세요.";
        isValid = false;
        setIsConfirmPassword(false);
      }
    }

    // 비밀번호 일치 검사
    if (formData.confirmPassword) {
      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "* 비밀번호가 일치하지 않습니다.";
        isValid = false;
        setIsConfirmPassword(false);
      } else {
        newErrors.confirmPassword = "";
        newSuccess.confirmPassword = "* 비밀번호가 일치합니다.";
        setIsConfirmPassword(true);
      }
    }

    setErrors(newErrors);
    setSuccess(newSuccess);
    setIsValid(isValid);
    return isValid;
  }, [formData, isEmailUnique, hasEmailCheck]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  // 이메일 중복 확인
  const handleDuplicateEmail = async (email: string) => {
    try {
      const data = await postCheckEmail(email);

      if (data.status === 200) {
        setIsConfirmEmail(true);
        setIsEmailUnique(!data.data.exists);
        setHasEmailCheck(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 회원가입
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string, name: string) => {
    e.preventDefault();

    if (isSubmitting) return; // 이미 제출 중이면 반환
    setIsSubmitting(true); // 제출 중으로 상태 변경

    try {
      const data = await postSignUp(email, password, name);
      if (data.status === 201) {
        alert("회원가입되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false); // 처리 완료 시 제출 중 상태 변경
    }
  };

  return (
    <style.Div>
      <style.Form onSubmit={e => handleSignup(e, formData.email, formData.password, formData.name)}>
        <style.FormItem>
          <div>
            <label htmlFor="name">이름</label>
            <style.Message>{errors.name}</style.Message>
          </div>
          <input type="text" id="name" placeholder="ex) 야놀자" value={formData.name} onChange={handleInputChange} />
        </style.FormItem>
        <style.FormItem>
          <div>
            <div>
              <label htmlFor="email">이메일</label>
              {hasEmailCheck ? (
                isEmailUnique ? (
                  <style.Message $isconfirm={true}>{success.email}</style.Message>
                ) : (
                  <style.Message>{errors.email}</style.Message>
                )
              ) : (
                <style.Message>{errors.email}</style.Message>
              )}
            </div>
            <style.EmailButton
              type="button"
              $isconfirm={isEmailUnique}
              disabled={!isConfirmEmail}
              onClick={() => {
                void handleDuplicateEmail(formData.email);
              }}
            >
              중복확인
            </style.EmailButton>
          </div>
          <input
            type="email"
            id="email"
            placeholder="ex) yanolja@yanolja.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </style.FormItem>
        <style.FormItem>
          <div>
            <label htmlFor="password">비밀번호</label>
            <style.Message>{errors.password}</style.Message>
          </div>
          <input type="password" id="password" value={formData.password} onChange={handleInputChange} />
        </style.FormItem>
        <style.FormItem>
          <div>
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            {isConfirmPassword ? (
              <style.Message $isconfirm={isConfirmPassword}>{success.confirmPassword}</style.Message>
            ) : (
              <style.Message>{errors.confirmPassword}</style.Message>
            )}
          </div>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </style.FormItem>
        <style.Button type="submit" disabled={!isValid || isSubmitting}>
          회원가입
        </style.Button>
      </style.Form>
    </style.Div>
  );
};

export default SignUp;
