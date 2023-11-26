import { HomeInnerContainer } from "../../styles/homeCommon";
import { useFestivalInfo } from "../../hooks/queries/home.hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FestivalCarouselItem from "./FestivalCarouselItem";

const FestivalCarousel = () => {
  const { data: festivals } = useFestivalInfo();

  if (!festivals) {
    <div>없지롱~~~</div>;
  }

  return (
    <HomeInnerContainer style={{ marginTop: "3rem" }}>
      <Swiper
        style={{ height: "200px" }}
        slidesPerView={2.5}
        navigation={true}
        pagination={{ clickable: true }}
        // spaceBetween={10}
        // loop={true} --> 부족하면 워닝 뜸
        autoplay={{ delay: 2500 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {festivals?.map(festival => (
          <SwiperSlide key={festival.id}>
            <FestivalCarouselItem title={festival.title} thumbnailImageUrl={festival.thumbnailImageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeInnerContainer>
  );
};

export default FestivalCarousel;
