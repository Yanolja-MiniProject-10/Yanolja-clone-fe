import { useEffect, useState } from "react";
import { AccommodationProps } from "../accommodation.types";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { useRecoilValue } from "recoil";
import { useAccommodationsListQuery } from "../hooks/accommodation.hooks";
import AccommodationContent from "../../../components/accommodation/AccommodationContent";
import { accommodationRegionState } from "../../../recoil/accommodation/accommodationRegion";

const AccommodationEntireList = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const { region } = useRecoilValue(accommodationRegionState);
  const entireResult = useAccommodationsListQuery({
    startDate,
    endDate,
    guest,
    region,
  });

  useEffect(() => {
    if (entireResult.status === "success" && entireResult.data.data.content) {
      setAccommodations(entireResult.data.data.content);
    }
  }, [entireResult.status]);

  return (
    <div>
      <AccommodationContent accommodations={accommodations} />
    </div>
  );
};

export default AccommodationEntireList;
