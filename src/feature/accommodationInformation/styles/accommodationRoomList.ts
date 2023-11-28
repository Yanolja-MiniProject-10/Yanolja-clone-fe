import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (width < 750px) {
    gap: 2rem;

    margin-top: 1rem;
  }
`;

export const ChooseRoomText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xs};

  margin-top: 20px;
`;
