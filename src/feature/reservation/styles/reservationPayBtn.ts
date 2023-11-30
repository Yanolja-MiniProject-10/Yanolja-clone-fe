import styled from "styled-components";

export const PrePayCondition = styled.span`
  width: 100%;
  height: 10px;

  margin: 5px;

  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const PayBtn = styled.button<{ $allChecked: boolean }>`
  width: 100%;
  height: 50px;

  margin: 10px 0 40px;

  border: none;
  border-radius: ${({ theme }) => theme.box.radius};

  font-size: ${({ theme }) => theme.fontSize.xxs};
  box-shadow: ${({ theme }) => theme.box.shadow};
  color: white;
  background-color: ${props => (props.$allChecked ? props.theme.color.mainPink : props.theme.color.middleGray)};

  transition: 0.2s;
`;
