import styled from "styled-components";

const InnerWrapper = styled.div`
  margin: auto 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
  cursor: pointer;
`;

const XSsizeP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export { InnerWrapper, IconBox, XSsizeP };
