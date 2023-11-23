import styled from "styled-components";

export const AccommodationList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};

  .cart-cancel-btn {
    align-self: self-start;

    border: none;

    color: ${({ theme }) => theme.color.middleGray};
    background-color: transparent;

    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

export const Accommodation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  .room-name {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .room-address {
    margin-top: 10px;

    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.color.middleGray};
  }
`;

export const RoomContents = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;

    margin-bottom: 15px;

    cursor: pointer;

    &:before {
      content: "";

      width: 12px;
      height: 12px;

      position: absolute;
      left: 0;
      top: 0;

      border: 2px solid ${({ theme }) => theme.color.mainPink};
      border-radius: 35%;
      background-color: white;
    }

    &:after {
      content: "";

      width: 6px;
      height: 3px;

      position: absolute;
      left: 4px;
      top: 4px;

      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-50deg);

      opacity: 0;
    }
  }

  input[type="checkbox"]:checked + label {
    &:before {
      background-color: ${({ theme }) => theme.color.mainPink};
      border-color: ${({ theme }) => theme.color.mainPink};
      color: white;
    }

    &:after {
      opacity: 1;
    }
  }

  .room-contents {
    width: 95%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-left: 40px;

    cursor: pointer;

    img {
      width: 80px;
      height: 80px;

      object-fit: cover;
    }

    .room-option-pay-amount {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }

    .delete-checked-box {
      border: none;

      font-size: ${({ theme }) => theme.fontSize.xxs};

      color: ${({ theme }) => theme.color.mainPink};
      background-color: transparent;
    }
  }
`;

export const RoomTextContent = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;

  margin: 0 15px;

  span {
    line-height: 25px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  .room-option-capacity {
    color: ${({ theme }) => theme.color.middleGray};
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  z-index: 1;

  background-color: rgb(114, 114, 114, 0.5);

  .modal-inner {
    width: 300px;
    height: 150px;

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

    .modal-contents {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 15px;

      font-size: ${({ theme }) => theme.fontSize.xxs};

      .modal-room-name {
        margin-bottom: 5px;

        color: ${({ theme }) => theme.color.darkGray};
      }
    }

    .modal-btns {
      width: 100%;

      display: flex;
      justify-content: space-between;

      padding: 0 35px;

      button {
        border: none;

        font-size: ${({ theme }) => theme.fontSize.xxs};
        background-color: transparent;
      }

      .modal-close {
        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.color.mainPink};
        }
      }

      .modal-room-delete {
        color: ${({ theme }) => theme.color.mainPink};

        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.color.hoverPink};
        }
      }
    }
  }
`;
