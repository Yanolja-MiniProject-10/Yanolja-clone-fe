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
  padding-bottom: 3px;

  background-color: ${({ theme }) => theme.color.mainPink};
  border-radius: ${({ theme }) => theme.box.radius};

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xs};
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
    width: 6rem;
    height: 6rem;
    border-radius: 5px;

    object-fit: cover;
  }
`;
const Description = styled.div`
  margin: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

//야놀자에서는 제목보다 가격에 bold처리해서 상의 해보기
const Name = styled.b`
  //font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Price = styled.p`
  //font-size: ${({ theme }) => theme.fontSize.xs};
`;

export { RankingItemWrapper, NumberBox, StyledLink, ImageBox, Description, Name, Price };
