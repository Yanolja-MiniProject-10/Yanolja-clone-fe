import RegionAreaItem from "./RegionAreaItem";
import { Link } from "react-router-dom";
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

import styled from "styled-components";
import { useRegionAccommodations } from "../../home.hooks";

const RegionListBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
