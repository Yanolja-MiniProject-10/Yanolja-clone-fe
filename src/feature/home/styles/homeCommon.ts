import styled from "styled-components";

const HomeInnerContainer = styled.div`
  min-width: 480px;
  margin-bottom: 3rem;

  * {
    .swiper-button-next,
    .swiper-button-prev {
      font-size: 30px !important;
      color: ${({ theme }) => theme.color.middleGray};

      &:hover {
        color: ${({ theme }) => theme.color.black};
      }
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: ${({ theme }) => theme.fontSize.xxl} !important;
      margin-bottom: 30px;
    }
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;

      background: ${({ theme }) => theme.color.darkGray};
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const Title = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
`;

const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

export { HomeInnerContainer, Title, HomeContainer };
