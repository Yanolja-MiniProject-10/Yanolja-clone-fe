import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (width < 840px) {
    gap: 2rem;

    margin-top: 1rem;
  }
`;
