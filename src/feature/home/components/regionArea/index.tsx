import React from "react";
import { useRegionAccommodations } from "../../home.hooks";
import RegionAreaItem from "./RegionAreaItem";
import { Link } from "react-router-dom";

const RegionArea = ({ accommodations }) => {
  //const { data: accommodations } = useRegionAccommodations();
  //console.log("accommodations", accommodations);

  return (
    <Container>
      <h1>지역 별 상품 추천</h1>
      {/* nav */}

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
    </Container>
  );
};

export default RegionArea;

import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 0;
`;
