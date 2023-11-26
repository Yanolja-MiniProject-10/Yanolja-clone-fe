import { useRankingAccommodations } from "../../hooks/queries/home.hooks";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RankingAreaItem from "./RankingAreaItem";
import { RankingWrapper } from "../../styles/rankingArea/rankingArea";
import { AccommodationResponse } from "../../home.types";

const RankingArea = () => {
  const { data } = useRankingAccommodations();
  const accommodations: AccommodationResponse[] = data;
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
