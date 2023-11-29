import CategoryArea from "../feature/home/components/CategoryArea";
import FestivalCarousel from "../feature/home/components/festivalCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/rankingArea";
import RegionArea from "../feature/home/components/regionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";
import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/hooks/queries/home.hooks";
import { HomeContainer } from "../feature/home/styles/homeCommon";
import { useRecoilValue } from "recoil";
import { relatedAccommodationsState } from "../recoil/home/clickedCategoryAndRegion";
import HomeContainerSkeleton from "../feature/home/components/HomeContainerSkeleton";

const Home = () => {
  const { data: allAccommodations, isFetching } = useAllAccommodations();

  const relatedCateRegion = useRecoilValue(relatedAccommodationsState);
  const { category: category, region: region } = relatedCateRegion;
  // 로그인 여부 판단해서 로그인 안했을 때는 연관숙소 보여주지 않음
  const { data: relatedAccommodations } = useRelatedAccommodations({ category, region });

  return (
    <>
      <FestivalCarousel />
      <HomeContainer>
        <CategoryArea />

        {isFetching ? (
          <HomeContainerSkeleton />
        ) : (
          <>
            {allAccommodations && (
              <AllAndRelatedSwiper title={"모든 숙소 둘러보기"} accommodations={allAccommodations} />
            )}

            {relatedAccommodations && (
              <AllAndRelatedSwiper
                title={"최근 본 상품의 연관 상품"}
                accommodations={relatedAccommodations}
                category={category}
                region={region}
              />
            )}

            <RegionArea />
            <RankingArea />
          </>
        )}
      </HomeContainer>
      <Footer />
      <NavBar />
    </>
  );
};

export default Home;
