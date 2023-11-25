import styled from "styled-components";

const HomeInnerContainer = styled.div`
  margin-bottom: 4rem;

  * {
    transition: 0.4s;

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.color.middleGray};
      &:hover {
        color: ${({ theme }) => theme.color.black};
      }
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.color.darkGray};
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      /* border-radius: 5px; */
      background: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const Title = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`;

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 60px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export { HomeInnerContainer, Title, HomeContainer };
