import CategoryArea from "../feature/home/components/CategoryArea";
import FestivalCarousel from "../feature/home/components/festivalCarousel";
import Footer from "../feature/home/components/Footer";
import ToTopButton from "../components/toTopButton/ToTopButton";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/rankingArea";
import RegionArea from "../feature/home/components/regionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";
import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/hooks/queries/home.hooks";
import { HomeContainer } from "../feature/home/styles/homeCommon";
//import { useRecoilValue } from "recoil";
//import { relatedAccommodationsState } from "../recoil/home/clickedData";

//const allAccommodations = responseMock.data.content;
// useRelatedAccommodations({ category, region });

const Home = () => {
  //const relatedCateRegion = useRecoilValue(relatedAccommodationsState);
  const { data: allAccommodations } = useAllAccommodations();

  const region = "경기";
  const category = "모텔";
  //const { category: realCate, region: realRegi } = relatedCateRegion;
  const { data: relatedAccommodations } = useRelatedAccommodations({ category, region });

  //realRegi ? console.log("잇음", realRegi, realCate) : console.log("읭 업는듯", relatedCateRegion, realRegi);

  return (
    <>
      <FestivalCarousel />
      <HomeContainer>
        <CategoryArea />
        <AllAndRelatedSwiper title={"모든 숙소 둘러보기"} accommodations={allAccommodations} />

        {relatedAccommodations ? (
          <AllAndRelatedSwiper
            title={"최근 본 상품의 연관 상품"}
            accommodations={relatedAccommodations}
            category={category}
            region={region}
          />
        ) : (
          <div>아직없음</div>
        )}

        <RegionArea />
        <RankingArea />
        <ToTopButton />
        <Footer />
      </HomeContainer>

      <NavBar />
    </>
  );
};

export default Home;
