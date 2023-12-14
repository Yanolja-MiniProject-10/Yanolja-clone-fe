import styled from "styled-components";

export const Form = styled.form`
  padding: 1rem;
  padding-bottom: 0.5rem;

  > div:first-of-type {
    margin-bottom: 1rem;
  }

  label {
    margin-right: 10px;
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.sm};
    white-space: nowrap;
  }

  p {
    padding-top: 15px;
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  input {
    width: 100%;
    padding: 5px;

    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  &:focus-within label {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const EditButtonWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 1.3rem;
  display: flex;
  justify-content: space-between;

  > button {
    background-color: inherit;
    border: none;
    transition: 0.4s;

    font-size: ${({ theme }) => theme.fontSize.sm};
    white-space: nowrap;
  }
`;
