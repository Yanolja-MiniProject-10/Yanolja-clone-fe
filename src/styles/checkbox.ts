import styled from "styled-components";

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    display: none;
  }

  label {
    width: auto;
    height: 15px;

    position: relative;

    padding-left: 30px;

    line-height: 22px;

    cursor: pointer;

    &:before {
      content: "";

      width: 18px;
      height: 18px;

      position: absolute;
      left: 0;
      top: 0;

      border: 2px solid ${({ theme }) => theme.color.middleGray};
      border-radius: 35%;
      background-color: white;

      transition: 0.3s;
    }

    &:after {
      content: "";

      width: 10px;
      height: 5px;

      position: absolute;
      left: 5px;
      top: 6px;

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
`;
