import styled from "styled-components";

export const CautionWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};
  padding: 30px 20px;
`;

export const CautionTitle = styled.h2`
  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.mainPink};
`;

export const CautionContents = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const CautionContent = styled.li`
  margin: 2px;
  padding: 3px 0;

  span {
    margin-left: 5px;
  }
`;
