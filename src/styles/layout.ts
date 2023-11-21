import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.color.brightGray};
`;

export const Box = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 52.5rem;
  background-color: ${({ theme }) => theme.color.white};
  padding-top: 50px;
`;
