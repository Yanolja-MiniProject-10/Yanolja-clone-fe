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
  min-height: 10rem;
  padding: 1.3rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.box.radius};
`;

export const Title = styled.div`
  padding: 1rem;

  > p {
    padding-bottom: 0.7rem;

    font-size: ${({ theme }) => theme.fontSize.sm};
    text-align: center;

    &:last-of-type {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 1rem;
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
