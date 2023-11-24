import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.brightGray};
`;

export const Box = styled.div`
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  max-width: 52.5rem;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
`;
