import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 5% 5% 60px;

  background-color: ${({ theme }) => theme.color.middleGray};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  * {
    color: #919191;
  }
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YLogoBox = styled(Link)``;

const FLogoBox = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  text-decoration: none;

  display: flex;
  justify-content: center;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  &:hover {
    * {
      transition: 0.4s;
      color: black;
    }
  }
`;

const ContextBox = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 11px;
  line-height: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  flex-wrap: wrap;
`;

const ButtonBox = styled(Link)`
  padding: 3px 5px;

  background-color: ${({ theme }) => theme.color.middleGray};
  border: 0.5px solid #e6e6e6;
  text-decoration: none;

  font-size: 10px;
  white-space: nowrap;

  &:hover {
    border-color: #616161;
  }
`;

export { FooterContainer, FooterHeader, YLogoBox, FLogoBox, ContextBox, ButtonContainer, ButtonBox };
