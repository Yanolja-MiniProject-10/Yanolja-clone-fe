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
  region?: string;
}
//region props에 추가
const AllAndRelatedSwiper = ({ title, accommodations, category, region }: AllAndRelatedProps) => {
  //Link에 한글 있어서 이동 시 에러(디코 fe대화 스샷 참고)
  //console.log("category, region", category, region);

  //region? Link로 넘겨주나?

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
