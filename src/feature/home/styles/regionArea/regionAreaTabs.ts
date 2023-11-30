import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperNavTabs = styled(Swiper)`
  margin-bottom: 1rem;

  .swiper-slide-thumb-active {
    color: ${({ theme }) => theme.color.mainPink};

    span {
      border-bottom: 3px solid ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const SwiperTab = styled(SwiperSlide)`
  display: flex;
  justify-content: center;

  cursor: pointer;
`;

const SpanTab = styled.span`
  padding: 0 4px 10px;

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

export { SwiperNavTabs, SwiperTab, SpanTab };
