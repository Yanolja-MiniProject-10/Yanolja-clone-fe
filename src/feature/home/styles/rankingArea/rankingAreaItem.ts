import { Link } from "react-router-dom";
import styled from "styled-components";

const RankingItemWrapper = styled.div`
  display: flex;
  grid-template-columns: auto 2fr;
  gap: 1rem;
  align-items: center;
`;

const NumberBox = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};

  display: flex;
  justify-content: center;

  & > p {
    height: 100%;

    display: flex;
    align-items: center;

    color: white;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const StyledLink = styled(Link)`
  /* background-color: skyblue; */
  display: flex;
  height: 100%;
  gap: 1rem;
`;

const ImageBox = styled.div`
  & > img {
    width: 7rem;
    height: 7rem;
    border-radius: 5px;

    object-fit: cover;
  }
`;
const Description = styled.div`
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Name = styled.b`
  //font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Price = styled.p`
  //font-size: ${({ theme }) => theme.fontSize.xs};
`;

export { RankingItemWrapper, NumberBox, StyledLink, ImageBox, Description, Name, Price };
