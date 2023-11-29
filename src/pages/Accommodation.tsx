import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout.ts";
import AccommodationNav from "../components/accommodation/AccommodationNav.tsx";
// import AccommodationContent from "../components/accommodation/AccommodationContent.tsx";

const Accommodation = () => {
  return (
    <AccommodationLayout>
      <AccommodationNav />
      {/* <AccommodationContent /> */}
    </AccommodationLayout>
  );
};

export default Accommodation;
