import { useEffect, useState } from "react";
import AccommodationContent from "../../../components/accommodation/AccommodationContent";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { AccommodationProps } from "../../accommodation/accommodation.types";
import { useAccommodationsCategoryQuery } from "../hooks/category.hooks";
import { useLocation } from "react-router-dom";
import { setSessionValue } from "../../../util/searchSessionValue";
import { useNavigate } from "react-router-dom";
import { Loading, LoadingWrapper } from "../../../styles/loading";

const AccommodationCategory = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const { pathname } = useLocation();
  setSessionValue("historyPage", "category");
  const navigate = useNavigate();
  const { data, status, isLoading } = useAccommodationsCategoryQuery({
    startDate,
    endDate,
    guest,
    category: decodeURI(pathname.split("/")[2]),
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
    <AccommodationContent accommodations={accommodations} />
  );
};

export default AccommodationCategory;
