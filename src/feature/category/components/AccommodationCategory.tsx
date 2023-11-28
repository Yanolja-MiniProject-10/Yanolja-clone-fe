import { useEffect, useState } from "react";
import AccommodationContent from "../../../components/accommodation/AccommodationContent";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { AccommodationProps } from "../../accommodation/accommodation.types";
import { useAccommodationsCategoryQuery } from "../hooks/category.hooks";
import { useLocation } from "react-router-dom";

const AccommodationCategory = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const { pathname } = useLocation();

  const categoryResult = useAccommodationsCategoryQuery({
    startDate,
    endDate,
    guest,
    category: decodeURI(pathname.split("/")[2]),
  });

  useEffect(() => {
    if (categoryResult.status === "success" && categoryResult.data.data.content) {
      setAccommodations(categoryResult.data.data.content);
    }
  }, [categoryResult.status]);

  return <AccommodationContent accommodations={accommodations} />;
};

export default AccommodationCategory;
