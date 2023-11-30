import { Link } from "react-router-dom";
import styled from "styled-components";

const RankingItemWrapper = styled.div`
  display: flex;
  grid-template-columns: auto 2fr;
  gap: 2rem;
  align-items: center;
`;

const NumberBox = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  padding-bottom: 1px;

  background-color: ${({ theme }) => theme.color.mainPink};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledLink = styled(Link)`
  height: 100%;

  width: 90%;
  display: flex;
  gap: 1rem;
`;

const ImageBox = styled.div`
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 5px;

    object-fit: cover;
  }
`;
const Description = styled.div`
  margin: 6% 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.b`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Price = styled.p`
  padding-right: 1.2rem;

  display: flex;
  justify-content: right;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export { RankingItemWrapper, NumberBox, StyledLink, ImageBox, Description, Name, Price };
