import React from "react";
import { getRankingAccommodations } from "../../home.api";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RankingAreaItem from "./RankingAreaItem";
import { RankingWrapper } from "../../styles/rankingArea/rankingArea";

const RankingArea = ({ accommodationsData }) => {
  //const { data: accommodations } = getRankingAccommodations();
  //console.log("RankingArea", accommodations);

  const accommodations = accommodationsData.slice(0, 6);

  return (
    <HomeInnerContainer>
      <Title>예약 숙소 랭킹</Title>
      <RankingWrapper>
        {accommodations?.map((accommodation, i) => (
          <RankingAreaItem
            key={accommodation.id}
            id={accommodation.id}
            index={i + 1}
            name={accommodation.name}
            thumbnail={accommodation.thumbnailImageUrl}
            minPrice={accommodation.minimumPrice}
            maxPrice={accommodation.maximumPrice}
          />
        ))}
      </RankingWrapper>
    </HomeInnerContainer>
  );
};

export default RankingArea;
