import styled from "styled-components";

const RegionListBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (width < 750px) {
    padding: 2% 8%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export { RegionListBox };
