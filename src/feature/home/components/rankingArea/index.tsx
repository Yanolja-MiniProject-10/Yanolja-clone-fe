import { useRankingAccommodations } from "../../hooks/queries/home.hooks";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RankingAreaItem from "./RankingAreaItem";
import { RankingWrapper } from "../../styles/rankingArea/rankingArea";

const RankingArea = () => {
  const { data: accommodations } = useRankingAccommodations();
  return (
    <HomeInnerContainer>
      <Title>예약 숙소 랭킹</Title>
      <RankingWrapper>
        {accommodations?.map((accommodation, i) => (
          <RankingAreaItem key={accommodation.id} index={i + 1} accommodation={accommodation} />
        ))}
      </RankingWrapper>
    </HomeInnerContainer>
  );
};

export default RankingArea;
