import styled from "styled-components";

export const SelectCartListWrapper = styled.div`
  width: 100%;

  padding: 40px;

  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;

export const ControlCartList = styled.div<{ $selectedRooms?: number }>`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .all-check-box {
    position: relative;

    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.color.darkGray};

    cursor: pointer;
  }

  .delete-checked-box {
    border: none;

    font-size: ${({ theme }) => theme.fontSize.xxs};

    color: ${props => (props.$selectedRooms ? props.theme.color.mainPink : props.theme.color.middleGray)};
    background-color: transparent;

    transition: 0.5s;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;

    padding-left: 25px;

    cursor: pointer;

    &:before {
      content: "";

      width: 15px;
      height: 15px;

      position: absolute;
      left: 0;
      top: 0;

      border: 2px solid ${({ theme }) => theme.color.mainPink};
      border-radius: 35%;
      background-color: white;
    }

    &:after {
      content: "";

      width: 8px;
      height: 4px;

      position: absolute;
      left: 4px;
      top: 5px;

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

export const CartListUl = styled.ul`
  width: 100%;

  margin: 20px 0 10px;
`;
