import CategoryArea from "../feature/home/components/CategoryArea";
import FestivalCarousel from "../feature/home/components/festivalCarousel/FestivalCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/rankingArea/RankingArea";
import RegionArea from "../feature/home/components/regionArea/RegionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper/AllAndRelatedSwiper";
import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/hooks/queries/home.hooks";
import { HomeContainer } from "../feature/home/styles/homeCommon";
import { useRecoilValue } from "recoil";
import { relatedAccommodationsState } from "../recoil/clickedCategoryAndRegion";
import HomeContainerSkeleton from "../feature/home/components/HomeContainerSkeleton";
import { setSessionValue } from "../util/searchSessionValue";
import { userState } from "../recoil/userData";

const Home = () => {
  const user = useRecoilValue(userState);
  const { data: allAccommodations, isFetching } = useAllAccommodations();

  const relatedCateRegion = useRecoilValue(relatedAccommodationsState);
  const { category: category, region: region } = relatedCateRegion;

  const { data: relatedAccommodations } = useRelatedAccommodations({ category, region });
  setSessionValue("historyPage", "accommodation");

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

            {user.accessToken && relatedAccommodations && (
              <AllAndRelatedSwiper
                title={"최근 본 상품의 연관 상품"}
                accommodations={relatedAccommodations}
                category={category}
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
