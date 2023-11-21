import EventCarousel from "../feature/home/components/EventCarousel";
import NavBar from "../feature/home/components/navBar";

const Home = () => {
  return (
    <>
      <div>
        메인
        <EventCarousel />
        <NavBar />
      </div>
    </>
  );
};

export default Home;

//style={{ backgroundColor: "green" }}
