import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
`;

export const Modal = styled.div`
  padding: 1.8rem 2.8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.box.radius};
`;

export const CloseIcon = styled.div`
  width: 30px;
  display: flex;
  margin-left: auto;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
    transition: 0.4s;
  }
`;

export const Form = styled.form`
  padding-top: 1rem;
  > div {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-end;
  }
  label {
    margin-right: 10px;
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.sm};
    white-space: nowrap;
  }
  p {
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
`;

export const Button = styled.button`
  display: flex;
  margin: 1.5rem auto 0 auto;
  padding: 0.8rem 1.7rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainPink};
  border: none;
  border-radius: ${({ theme }) => theme.box.radius};

  font-size: ${({ theme }) => theme.fontSize.xs};
  transition: 0.4s;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;
