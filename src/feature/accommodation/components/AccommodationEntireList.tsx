import { useEffect, useState } from "react";
import { AccommodationProps } from "../accommodation.types";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { useRecoilValue } from "recoil";
import { useAccommodationsListQuery } from "../hooks/accommodation.hooks";
import AccommodationContent from "../../../components/accommodation/AccommodationContent";

const AccommodationEntireList = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  console.log(startDate, endDate, guest);
  const entireResult = useAccommodationsListQuery({
    startDate,
    endDate,
    guest,
  });

  console.log(entireResult);

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
