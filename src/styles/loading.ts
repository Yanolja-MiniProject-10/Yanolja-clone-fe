import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  z-index: 2;

  opacity: 0.5;

  background-color: rgb(114, 114, 114, 0.5);
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  margin: auto;
  border: 5.5px solid rgba(255, 255, 255, 0.3);
  border-top: 5.5px solid ${({ theme }) => theme.color.mainPink};
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
