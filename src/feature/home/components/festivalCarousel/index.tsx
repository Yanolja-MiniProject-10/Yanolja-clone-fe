import { HomeInnerContainer } from "../../styles/homeCommon";
import { useFestivalInfo } from "../../hooks/queries/home.hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FestivalCarouselItem from "./FestivalCarouselItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FestivalCarousel = () => {
  const { data: festivals, isFetching } = useFestivalInfo();

  return (
    <HomeInnerContainer style={{ marginTop: "3rem" }}>
      {isFetching ? (
        <div style={{ display: "flex", gap: "10px", overflow: "hidden" }}>
          <Skeleton height={140} width={250} />
          <Skeleton height={140} width={250} />
          <Skeleton height={140} width={250} />
        </div>
      ) : (
        <Swiper
          style={{ height: "180px" }}
          slidesPerView={2.3}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {festivals?.map(
            festival =>
              festival.thumbnailImageUrl && (
                <SwiperSlide key={festival.id}>
                  <FestivalCarouselItem festival={festival} />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      )}
    </HomeInnerContainer>
  );
};

export default FestivalCarousel;
