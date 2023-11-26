import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (width < 840px) {
    gap: 3rem;
  }
`;
