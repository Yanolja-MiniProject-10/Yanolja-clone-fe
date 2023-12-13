import styled from "styled-components";

export const RadioWrapper = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 25px auto;
  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 5px 20px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const RadioTitle = styled.span`
  width: 65%;
  color: ${({ theme }) => theme.color.mainPink};
`;

export const LabelWrapper = styled.div`
  width: 35%;

  text-align: end;
`;

export const RadioLabel = styled.label`
  margin: 0 3px;

  span {
    vertical-align: text-top;
  }

  [type="radio"] {
    appearance: none;
    border: 1px solid ${({ theme }) => theme.color.darkGray};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    transition: 0.5s;
  }

  [type="radio"]:checked {
    border: 5px solid ${({ theme }) => theme.color.mainPink};
  }

  [type="radio"]:hover + span {
    cursor: pointer;
  }
`;
