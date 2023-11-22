import CategoryArea from "../feature/home/components/CategoryArea";
import EventCarousel from "../feature/home/components/EventCarousel";
import Footer from "../feature/home/components/Footer";
import NavBar from "../feature/home/components/NavBar";
import RankingArea from "../feature/home/components/RankingArea";
import RegionArea from "../feature/home/components/RegionArea";
import AllAndRelatedSwiper from "../feature/home/components/allAndRelatedSwiper";

const Home = () => {
  return (
    <>
      <div style={{ paddingBottom: "50px" }}>
        메인
        <EventCarousel />
        <CategoryArea />
        <AllAndRelatedSwiper />
        <RegionArea />
        <RankingArea />
        <Footer />
        <NavBar />
      </div>
    </>
  );
};

export default Home;
