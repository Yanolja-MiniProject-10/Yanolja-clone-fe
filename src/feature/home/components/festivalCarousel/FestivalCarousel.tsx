import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const { data: festivals, isFetching, status } = useFestivalInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      window.alert("잘못된 접근입니다. 다시 시도해 주세요.");
      navigate("/");
    }
  }, [status]);

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
          slidesPerView={1.5}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            540: { slidesPerView: 1.7 },
            620: { slidesPerView: 1.9 },
            660: { slidesPerView: 2.1 },
            735: { slidesPerView: 2.3 },
          }}
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
