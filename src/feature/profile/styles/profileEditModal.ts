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
  margin: 0 auto;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.box.radius};
`;

export const Form = styled.form`
  padding: 1rem;

  > div {
    margin-bottom: 1.5rem;
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

export const ButtonWrapper = styled.div`
  width: 60%;
  margin: 15px auto 10px auto;
  display: flex;
  justify-content: space-between;

  > button {
    background-color: inherit;
    border: none;
    transition: 0.4s;

    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
    white-space: nowrap;
  }
`;

export const CancelButton = styled.button`
  color: ${({ theme }) => theme.color.darkGray};

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ConfirmButton = styled.button`
  color: ${({ theme }) => theme.color.mainPink};

  &:hover {
    color: ${({ theme }) => theme.color.hoverPink};
  }
`;
