import { useRegionAccommodations } from "../../home.hooks";
import RegionAreaItem from "./RegionAreaItem";
import { Link } from "react-router-dom";
import { RegionListBox } from "../../styles/regionArea/regionArea.ts";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { responseMock } from "../../homeMockdata.ts";

interface SlideProps {
  region: string;
}

//API연결 끊고 목데이터 사용중입니다.
const RegionAreaSlide = ({ region }: SlideProps) => {
  //const { data: accommodations } = useRegionAccommodations(region);
  const allAccommodations = responseMock.data.content;
  const accommodations = allAccommodations.slice(0, 4);
  return (
    <RegionListBox>
      {accommodations?.length == 0 ? (
        <div> 오늘 예약 가능한 숙소가 없습니다.</div>
      ) : (
        accommodations?.map(accommodation => (
          <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
            <RegionAreaItem
              name={accommodation.name}
              thumbnail={accommodation.thumbnailImageUrl}
              minPrice={accommodation.minimumPrice}
              maxPrice={accommodation.maximumPrice}
            />
          </Link>
        ))
      )}
    </RegionListBox>
  );
};

export default RegionAreaSlide;
