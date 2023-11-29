import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout.ts";
import AccommodationNav from "../components/accommodation/AccommodationNav.tsx";
import AccommodationEntireList from "../feature/accommodation/components/AccommodationEntireList.tsx";

const Accommodation = () => {
  return (
    <AccommodationLayout>
      <AccommodationNav />
      <AccommodationEntireList />
    </AccommodationLayout>
  );
};

export default Accommodation;
