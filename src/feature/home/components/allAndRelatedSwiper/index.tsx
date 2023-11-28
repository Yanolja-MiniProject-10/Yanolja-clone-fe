import AllAndRelatedSwiperItem from "./AllAndRelatedSwiperItem";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TitleAndLinkBox, LinkToOthers } from "../../styles/allAndRelatedSwiper";
import { Accommodation } from "../../home.types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAllAccommodations } from "../../hooks/queries/home.hooks";

interface AllAndRelatedProps {
  title: string;
  accommodations: Accommodation[];
  category?: string;
  region?: string;
}
//region props에 추가
const AllAndRelatedSwiper = ({ title, accommodations, category, region }: AllAndRelatedProps) => {
  console.log("category, region", category, region);

  return (
    <HomeInnerContainer>
      <TitleAndLinkBox>
        <Title>{title}</Title>
        <LinkToOthers to={category ? `/category/${category}` : `/accommodation`}>전체보기 &gt;</LinkToOthers>
      </TitleAndLinkBox>
      <Swiper slidesPerView={3.2} navigation={true} modules={[Navigation]}>
        {accommodations?.map(accommodation => (
          <SwiperSlide key={accommodation.id}>
            <Link to={`/accommodation/${accommodation.id}`}>
              <AllAndRelatedSwiperItem accommodation={accommodation} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </>
      )} */}
    </HomeInnerContainer>
  );
};

export default AllAndRelatedSwiper;
