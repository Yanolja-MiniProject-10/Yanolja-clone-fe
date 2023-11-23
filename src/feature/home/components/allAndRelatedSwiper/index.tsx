import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { HomeInnerContainer } from "../../styles/homeCommon";

import { Link } from "react-router-dom";

const AllAndRelatedSwiper = ({ title, accommodations }) => {
  return (
    <HomeInnerContainer>
      <h1>{title}</h1>
      <Swiper slidesPerView={5} spaceBetween={100} loop={true} navigation={true} modules={[Navigation]}>
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
      </Swiper>
    </HomeInnerContainer>
  );
};

export default AllAndRelatedSwiper;
