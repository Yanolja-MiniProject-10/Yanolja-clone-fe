import { useEffect, useState } from "react";
import { AccommodationProps } from "../accommodation.types";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { useRecoilValue } from "recoil";
import { useAccommodationsListQuery } from "../hooks/accommodation.hooks";
import AccommodationContent from "../../../components/accommodation/AccommodationContent";
import { accommodationRegionState } from "../../../recoil/accommodationRegion";
import { setSessionValue } from "../../../util/searchSessionValue";
import { Loading, LoadingWrapper } from "../../../styles/loading";
import { useNavigate } from "react-router-dom";

const AccommodationEntireList = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const { region } = useRecoilValue(accommodationRegionState);
  const navigate = useNavigate();
  setSessionValue("historyPage", "accommodation");
  const { data, status, isLoading } = useAccommodationsListQuery({
    startDate,
    endDate,
    guest,
    region,
  });

  useEffect(() => {
    if (status === "success" && data?.data?.content) {
      setAccommodations(data?.data?.content);
    } else if (status === "error") {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigate("/");
    }
  }, [status]);

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <div>
      <AccommodationContent accommodations={accommodations} />
    </div>
  );
};

export default AccommodationEntireList;
