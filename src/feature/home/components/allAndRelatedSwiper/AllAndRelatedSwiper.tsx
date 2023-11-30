import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TitleAndLinkBox, LinkToOthers } from "../../styles/allAndRelatedSwiper";
import { Accommodation } from "../../home.types";

interface AllAndRelatedProps {
  title: string;
  accommodations: Accommodation[];
  category?: string;
}

const AllAndRelatedSwiper = ({ title, accommodations, category }: AllAndRelatedProps) => {
  return (
    <HomeInnerContainer>
      <TitleAndLinkBox>
        <Title>{title}</Title>
        <LinkToOthers to={category ? `/category/${category}` : `/accommodation`}>전체보기 &gt;</LinkToOthers>
      </TitleAndLinkBox>
      <Swiper
        slidesPerView={2.2}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          630: { slidesPerView: 2.5 },
          680: { slidesPerView: 2.8 },
          730: { slidesPerView: 3.1 },
        }}
      >
        {accommodations?.map(accommodation => (
          <SwiperSlide key={accommodation.id}>
            <Link to={`/accommodation/${accommodation.id}`}>
              <AllAndRelatedSwiperItem accommodation={accommodation} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeInnerContainer>
  );
};

export default AllAndRelatedSwiper;
