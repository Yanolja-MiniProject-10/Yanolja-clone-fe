import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";

import styled from "styled-components";

interface TabsProps {
  setThumbsSwiper: React.Dispatch<React.SetStateAction<SwiperCore | null>>;
}

const RegionAreaTabs = ({ setThumbsSwiper }: TabsProps) => {
  return (
    <div>
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
    </div>
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
  padding: 0 4px 1rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`;
