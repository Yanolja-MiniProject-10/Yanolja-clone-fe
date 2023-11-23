import React, { useState } from "react";
//import { useRegionAccommodations } from "../../home.hooks";
import RegionAreaItem from "./RegionAreaItem";
import { Link } from "react-router-dom";

//여기 주석도 나중에 api 모두 완성 되면 활성화 합니다!
const RegionArea = ({ accommodations }) => {
  const [region, setRegion] = useState("SEOUL");
  //const { data: accommodations } = useRegionAccommodations();
  //console.log("accommodations", accommodations);

  const fourAccommodations = accommodations.slice(0, 4);

  return (
    <Container>
      <h1>지역 별 상품 추천</h1>
      {/* nav */}

      <RegionListBox>
        {fourAccommodations?.map(accommodation => (
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
    </Container>
  );
};

export default RegionArea;

import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 0;
`;

const RegionListBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
