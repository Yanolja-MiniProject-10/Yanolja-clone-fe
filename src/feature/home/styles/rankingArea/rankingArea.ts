import styled from "styled-components";

const RankingWrapper = styled.div`
  margin: 0 3%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (width < 700px) {
    margin: 0 8%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { RankingWrapper };
