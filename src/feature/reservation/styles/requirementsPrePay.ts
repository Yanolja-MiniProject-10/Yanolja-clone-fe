import styled from "styled-components";

export const RequirementsTitle = styled.h2`
  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const RequirementsContents = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Requirement = styled.li`
  margin: 8px;

  color: black;
`;
