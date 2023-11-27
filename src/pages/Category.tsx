import AccommodationNav from "../components/accommodation/AccommodationNav";
import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout";
import AccommodationCategory from "../feature/category/components/AccommodationCategory";

const Category = () => {
  return (
    <AccommodationLayout>
      <AccommodationNav />
      <AccommodationCategory />
    </AccommodationLayout>
  );
};

export default Category;
