import React, { useState } from "react";
import { HomeInnerContainer } from "../../styles/homeCommon";
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
    <HomeInnerContainer>
      <StyledSpan>지역 별 상품 추천</StyledSpan>
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
    </HomeInnerContainer>
  );
};

export default RegionArea;

import styled from "styled-components";

const RegionListBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1rem;
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
`;
