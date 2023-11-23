import { useRegionAccommodations } from "../../home.hooks";
import RegionAreaItem from "./RegionAreaItem";
import { Link } from "react-router-dom";
import { RegionListBox } from "../../styles/regionArea/regionArea.ts";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface SlideProps {
  region: string;
}

const RegionAreaSlide = ({ region }: SlideProps) => {
  const { data: accommodations } = useRegionAccommodations(region);

  return (
    <RegionListBox>
      {accommodations?.map(accommodation => (
        <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
          <RegionAreaItem
            name={accommodation.name}
            thumbnail={accommodation.thumbnailImageUrl}
            minPrice={accommodation.minimumPrice}
            maxPrice={accommodation.maximumPrice}
          />
        </Link>
      ))}
    </RegionListBox>
  );
};

export default RegionAreaSlide;
