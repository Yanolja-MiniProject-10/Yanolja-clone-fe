import { Link } from "react-router-dom";
import styled from "styled-components";

const InnerWrapper = styled.div`
  margin: auto 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    * {
      transition: 0.4s;
      color: ${({ theme }) => theme.color.mainPink};
    }
  }

  * img {
    width: 60px;
  }
`;

const XSsizeP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export { InnerWrapper, IconBox, XSsizeP };
