import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { CustomNavigation } from "../../styles/allAndRelatedSwiper";

import { Link } from "react-router-dom";

const AllAndRelatedSwiper = ({ title, accommodations }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={100}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {accommodations?.map(accommodation => (
          <SwiperSlide key={accommodation.id}>
            <Link to={`/accommodation/${accommodation.id}`}>
              <AllAndRelatedSwiperItem
                name={accommodation.name}
                thumbnail={accommodation.thumbnailImageUrl}
                minPrice={accommodation.minimumPrice}
                maxPrice={accommodation.maximumPrice}
              />
            </Link>
          </SwiperSlide>
        ))}

        <CustomNavigation>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </CustomNavigation>
      </Swiper>
    </div>
  );
};

export default AllAndRelatedSwiper;
