import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TitleAndLinkBox, LinkToOthers } from "../../styles/allAndRelatedSwiper";
import { AccommodationResponse } from "../../home.types";

interface AllAndRelatedProps {
  title: string;
  accommodations: AccommodationResponse[];
  category?: string;
  region?: string;
}

//Home에서 리코일 받아서 뿌리고,
const AllAndRelatedSwiper = ({ title, accommodations, category, region }: AllAndRelatedProps) => {
  //Link to 카테고리 조건 넣기
  // if(category){
  //   const encodedCategory = encodeURIComponent(category);
  //에러 확인

  return (
    <HomeInnerContainer>
      <TitleAndLinkBox>
        <Title>{title}</Title>
        <LinkToOthers to={category ? `/category/${category}` : `/accommodation`}>전체보기 &gt;</LinkToOthers>
      </TitleAndLinkBox>
      <Swiper slidesPerView={3} navigation={true} modules={[Navigation]}>
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
