import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RegionAreaTabs from "./RegionAreaTabs";
import RegionAreaSlide from "./RegionAreaSlide";
import { useRegionList } from "../../hooks/queries/home.hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const RegionArea = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const { data: regions, status } = useRegionList();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      window.alert("잘못된 접근입니다. 다시 시도해 주세요.");
      navigate("/");
    }
  }, [status]);

  return (
    <HomeInnerContainer>
      <Title>지역 별 상품 추천</Title>
      <RegionAreaTabs regions={regions} setThumbsSwiper={setThumbsSwiper} />

      <Swiper effect="flip" thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}>
        {regions?.map((region, i) => (
          <SwiperSlide key={i}>
            <RegionAreaSlide region={region} />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeInnerContainer>
  );
};

export default RegionArea;
