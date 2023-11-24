import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import { SwiperNavTabs, SwiperTab, SpanTab } from "../../styles/regionArea/regionArea.ts";

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
