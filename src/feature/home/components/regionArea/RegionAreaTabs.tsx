import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import { SwiperNavTabs, SwiperTab, SpanTab } from "../../styles/regionArea/regionAreaTabs.ts";

interface TabsProps {
  regions: string[] | undefined;
  setThumbsSwiper: React.Dispatch<React.SetStateAction<SwiperCore | null>>;
}

const RegionAreaTabs = ({ regions, setThumbsSwiper }: TabsProps) => {
  return (
    <div>
      <SwiperNavTabs
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {regions?.map(region => (
          <SwiperTab key={region}>
            <SpanTab>{region}</SpanTab>
          </SwiperTab>
        ))}
      </SwiperNavTabs>
    </div>
  );
};

export default RegionAreaTabs;
