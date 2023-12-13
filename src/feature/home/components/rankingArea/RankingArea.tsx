import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRankingAccommodations } from "../../hooks/queries/home.hooks";
import { HomeInnerContainer, Title } from "../../styles/homeCommon";
import RankingAreaItem from "./RankingAreaItem";
import { RankingWrapper } from "../../styles/rankingArea/rankingArea";

const RankingArea = () => {
  const { data: accommodations, status } = useRankingAccommodations();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      window.alert("잘못된 접근입니다. 다시 시도해 주세요.");
      navigate("/");
    }
  }, [status]);
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
