import CategoryArea from "../feature/home/components/CategoryArea";
import FestivalCarousel from "../feature/home/components/festivalCarousel";
import Footer from "../feature/home/components/Footer";
import ToTopButton from "../components/toTopButton/ToTopButton";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/rankingArea";
import RegionArea from "../feature/home/components/regionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";
import { responseMock } from "../feature/home/homeMockdata";
import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/home.hooks";

import { HomeContainer } from "../feature/home/styles/homeCommon";

{
  /* 이곳의 주석들은 API 최종 완성 후 주석 해제 예정입니다 */
}
const Home = () => {
  const { data: allAccommodations, isError } = useAllAccommodations();
  const region = "경기";
  const category = "펜션_풀빌라";
  // useRelatedAccommodations({ category, region });
  const { data: relatedAccommodations } = useRelatedAccommodations({ category, region });

  //const allAccommodations = responseMock.data.content;

  // if (isError) {
  //   console.error();
  // }
  return (
    <>
      {/* <FestivalCarousel festivalsData={allAccommodations} /> */}
      <HomeContainer>
        <CategoryArea />
        <AllAndRelatedSwiper title={"모든 숙소 둘러보기"} accommodations={allAccommodations} />
        <AllAndRelatedSwiper
          title={"최근 본 상품의 연관 상품"}
          accommodations={relatedAccommodations}
          category={category}
          region={region}
        />
        <RegionArea />
        {/* <RankingArea accommodationsData={allAccommodations} /> */}
        <ToTopButton />
        <Footer />
      </HomeContainer>

      <NavBar />
    </>
  );
};

export default Home;
