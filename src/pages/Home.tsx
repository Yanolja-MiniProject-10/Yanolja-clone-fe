import CategoryArea from "../feature/home/components/CategoryArea";
import EventCarousel from "../feature/home/components/EventCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/RankingArea";
import RegionArea from "../feature/home/components/RegionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";

const Home = () => {
  return (
    <HomeContainer>
      메인
      <EventCarousel />
      <CategoryArea />
      <AllAndRelatedSwiper />
      <RegionArea />
      <RankingArea />
      <Footer />
      <NavBar />
    </HomeContainer>
  );
};

export default Home;

import styled from "styled-components";

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 50px;
`;
