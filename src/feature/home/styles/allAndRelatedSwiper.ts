import styled from "styled-components";

export const CustomNavigation = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.color.middleGray}; // 원하는 색상으로 변경
  }
`;
