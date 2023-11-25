import React, { useState } from "react";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RegionAreaTabs from "./RegionAreaTabs";
import RegionAreaSlide from "./RegionAreaSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const RegionArea = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const regions = ["서울", "강원", "경기", "제주"];

  return (
    <HomeInnerContainer>
      <Title>지역 별 상품 추천</Title>
      <RegionAreaTabs setThumbsSwiper={setThumbsSwiper} />

      <Swiper
        effect="flip"
        // navigation={true}
        spaceBetween={10}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {regions.map((region, i) => (
          <SwiperSlide key={i}>
            <RegionAreaSlide region={region} />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeInnerContainer>
  );
};

export default RegionArea;
