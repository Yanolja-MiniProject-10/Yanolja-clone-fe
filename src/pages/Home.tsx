import CategoryArea from "../feature/home/components/CategoryArea";
import EventCarousel from "../feature/home/components/EventCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/rankingArea";
import RegionArea from "../feature/home/components/regionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";
import { responseMock } from "../feature/home/homeMockdata";
import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/home.hooks";
import { FaArrowUp } from "react-icons/fa6";
import { HomeContainer, ToTopButton } from "../feature/home/styles/homeCommon";

{
  /* 이곳의 주석들은 API 최종 완성 후 주석 해제 예정입니다 */
}
const Home = () => {
  //const { data: allAccommodations, isError } = useAllAccommodations();
  //const { data: relatedAccommodations } = useRelatedAccommodations('SEOUL');

  const allAccommodations = responseMock.data.content;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // if (isError) {
  //   console.error();
  // }
  return (
    <>
      <HomeContainer>
        <EventCarousel />
        <CategoryArea />
        <AllAndRelatedSwiper title={"모든 숙소 둘러보기"} accommodations={allAccommodations} />
        {/* <AllAndRelatedSwiper title={"최근 본 상품의 연관 상품"} accommodations={relatedAccommodations} /> */}
        <RegionArea />
        <RankingArea accommodationsData={allAccommodations} />
        <ToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ToTopButton>
        <Footer />
      </HomeContainer>

      <NavBar />
    </>
  );
};

export default Home;
