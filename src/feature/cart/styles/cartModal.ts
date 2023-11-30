import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  z-index: 2;

  background-color: rgb(114, 114, 114, 0.5);
`;

export const ModalInner = styled.div`
  width: 350px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 25px;

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: ${({ theme }) => theme.color.white};

  opacity: 1;
`;

export const ModalContents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 10px 0;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const ModalQ = styled.span`
  padding: 5px;

  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const ModalRoomName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15px 0;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};

  span {
    padding: 5px;
  }
`;

export const ModalBtns = styled.div`
  width: 100%;
  height: 30px;

  display: flex;

  button {
    border: none;

    font-size: ${({ theme }) => theme.fontSize.xxs};
    background-color: transparent;
  }
`;

export const ModalClose = styled.button`
  width: 50%;

  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

export const ModalRoomDelete = styled.button`
  width: 50%;

  color: ${({ theme }) => theme.color.mainPink};

  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.hoverPink};
  }
`;
