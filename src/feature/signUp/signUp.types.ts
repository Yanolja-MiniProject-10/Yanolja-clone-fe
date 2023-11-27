export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface MessageProps {
  $isconfirm?: boolean;
}

export interface EmailCheckResponse {
  status: number;
  data: {
    exists: boolean;
  };
}
