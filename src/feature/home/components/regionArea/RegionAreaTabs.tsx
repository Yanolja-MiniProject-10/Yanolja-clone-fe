import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { HomeInnerContainer } from "../../styles/homeCommon";
import { SwiperOptions, Swiper as SwiperCore } from "swiper/types";
import styled from "styled-components";

const RegionAreaTabs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <HomeInnerContainer>
      <SwiperNavTabs
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperTab>
          <SpanTab>서울</SpanTab>
        </SwiperTab>
        <SwiperTab>
          <SpanTab>경기</SpanTab>
        </SwiperTab>
        <SwiperTab>
          <SpanTab>강원</SpanTab>
        </SwiperTab>
        <SwiperTab>
          <SpanTab>제주</SpanTab>
        </SwiperTab>
      </SwiperNavTabs>

      <Swiper navigation={true} loop={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </HomeInnerContainer>
  );
};

export default RegionAreaTabs;

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
  padding: 1rem 4px;

  font-size: ${({ theme }) => theme.fontSize.md};
`;
