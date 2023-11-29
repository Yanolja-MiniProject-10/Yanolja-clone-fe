import { useState } from "react";
import AccommodationNav from "../components/accommodation/AccommodationNav";
import { AccommodationProps } from "../feature/accommodation/accommodation.types";
import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout";
import AccommmodationSearchResult from "../feature/search/components/AccommmodationSearchResult";
import AccommodationSearch from "../feature/search/components/AccommodationSearch";

const Search = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  return (
    <AccommodationLayout>
      <AccommmodationSearchResult setAccommodations={setAccommodations} />
      <AccommodationNav />
      <AccommodationSearch accommodations={accommodations} />
    </AccommodationLayout>
  );
};

export default Search;
