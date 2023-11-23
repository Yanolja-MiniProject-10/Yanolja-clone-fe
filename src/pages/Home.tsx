import CategoryArea from "../feature/home/components/CategoryArea";
import EventCarousel from "../feature/home/components/EventCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/RankingArea";
import RegionArea from "../feature/home/components/regionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";
import { responseMock } from "../feature/home/homeMockdata";
//import { useAllAccommodations, useRelatedAccommodations } from "../feature/home/home.hooks";

{
  /* 이곳의 주석들은 API 최종 완성 후 주석 해제 예정입니다 */
}
const Home = () => {
  //const { data: allAccommodations } = useAllAccommodations();
  //const { data: relatedAccommodations } = useRelatedAccommodations('SEOUL');

  const allAccommodations = responseMock.data.content;

  return (
    <>
      <HomeContainer>
        <EventCarousel />
        <CategoryArea />
        <AllAndRelatedSwiper title={"모든 숙소 둘러보기"} accommodations={allAccommodations} />
        {/* <AllAndRelatedSwiper title={"최근 본 상품의 연관 상품"} accommodations={relatedAccommodations} /> */}
        <RegionArea accommodations={allAccommodations} />
        <RankingArea />
        <Footer />
      </HomeContainer>

      <NavBar />
    </>
  );
};

export default Home;

// 나중에 파일로 분리하겠습니다!
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 60px;

  a {
    text-decoration: none;
    color: black;
  }
`;
