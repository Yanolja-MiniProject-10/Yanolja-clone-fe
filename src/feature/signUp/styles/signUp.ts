import styled from "styled-components";
import { MessageProps } from "../signUp.types";

export const Div = styled.div`
  width: 90%;
  margin: 1rem auto 0 auto;
`;

export const Form = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const FormItem = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    label {
      margin-right: 10px;

      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${({ theme }) => theme.fontSize.xs};
      white-space: nowrap;
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
  &:focus-within label {
    color: black;
  }
`;

export const EmailButton = styled.button<MessageProps>`
  margin-left: auto;
  padding: 8px 18px 6px 18px;

  color: ${({ $isconfirm, theme }) => ($isconfirm ? theme.color.white : theme.color.mainPink)};
  background-color: ${({ $isconfirm, theme }) => ($isconfirm ? theme.color.mainPink : theme.color.white)};
  border-radius: ${({ theme }) => theme.box.radius};
  border: 2px solid ${({ theme }) => theme.color.mainPink};

  font-size: ${({ theme }) => theme.fontSize.xxs};
  white-space: nowrap;
  transition: 0.4s;

  &:hover {
    color: ${({ $isconfirm, theme }) => ($isconfirm ? theme.color.white : theme.color.hoverPink)};
    border: ${({ $isconfirm, theme }) =>
      $isconfirm ? `2px solid ${theme.color.mainPink}` : `2px solid ${theme.color.hoverPink}`};
    transition: 0.4s;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.middleGray};
    border: 2px solid ${({ theme }) => theme.color.middleGray};
    cursor: auto;

    &:hover {
      color: ${({ theme }) => theme.color.middleGray};
      border: 2px solid ${({ theme }) => theme.color.middleGray};
    }
  }
`;

export const Message = styled.p<MessageProps>`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ $isconfirm, theme }) => ($isconfirm ? theme.color.green : theme.color.red)};
  white-space: nowrap;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 1rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainPink};
  border: none;
  border-radius: ${({ theme }) => theme.box.radius};
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: 0.4s;

  &:disabled {
    background-color: ${({ theme }) => theme.color.middleGray};
    cursor: auto;

    &:hover {
      background-color: ${({ theme }) => theme.color.middleGray};
      transition: 0.4s;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;
