import styled from "styled-components";

const HomeInnerContainer = styled.div`
  margin-bottom: 3rem;
  * {
    --swiper-navigation-color: ${({ theme }) => theme.color.middleGray};
  }
`;

const Title = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`;

export { HomeInnerContainer, Title };
