import styled from "styled-components";

const HomeInnerContainer = styled.div`
  margin-bottom: 4rem;
  * {
    --swiper-navigation-color: ${({ theme }) => theme.color.middleGray};
  }
`;

export { HomeInnerContainer };
