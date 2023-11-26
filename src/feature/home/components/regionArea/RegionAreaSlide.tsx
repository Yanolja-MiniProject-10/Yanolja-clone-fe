import { useRegionAccommodations } from "../../hooks/queries/home.hooks.ts";
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
      {accommodations?.length == 0 ? (
        <div> 오늘 예약 가능한 숙소가 없습니다.</div>
      ) : (
        accommodations?.map(accommodation => (
          <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
            <RegionAreaItem accommodation={accommodation} />
          </Link>
        ))
      )}
    </RegionListBox>
  );
};

export default RegionAreaSlide;
