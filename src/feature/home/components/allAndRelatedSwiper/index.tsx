import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TitleAndLinkBox, LinkToOthers } from "../../styles/allAndRelatedSwiper";

const AllAndRelatedSwiper = ({ title, accommodations }) => {
  //Link to 카테고리 조건 넣기

  return (
    <HomeInnerContainer>
      <TitleAndLinkBox>
        <Title>{title}</Title>
        <LinkToOthers to="/accommodation">전체보기 &gt; </LinkToOthers>
      </TitleAndLinkBox>
      <Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]}>
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
