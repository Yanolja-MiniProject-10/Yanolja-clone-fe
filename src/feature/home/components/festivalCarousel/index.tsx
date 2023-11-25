import React, { useEffect } from "react";
import { HomeInnerContainer } from "../../styles/homeCommon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FestivalCarouselItem from "./FestivalCarouselItem";
import { FestivalResponse } from "../../home.types";

const FestivalCarousel = ({ festivalsData }) => {
  const festivals = festivalsData.slice(0, 6);

  return (
    <HomeInnerContainer style={{ marginTop: "3rem" }}>
      <Swiper
        style={{ height: "200px" }}
        slidesPerView={2.5}
        navigation={true}
        pagination={{ clickable: true }}
        // spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2500 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {festivals.map(festival => (
          <SwiperSlide key={festival.id}>
            <FestivalCarouselItem title={festival.name} thumbnailImageUrl={festival.thumbnailImageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeInnerContainer>
  );
};

export default FestivalCarousel;
