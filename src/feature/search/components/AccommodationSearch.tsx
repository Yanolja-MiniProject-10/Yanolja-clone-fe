import AccommodationContent from "../../../components/accommodation/AccommodationContent";
import { AccommodationSearchResultParams } from "../search.types";

const AccommodationSearch = ({ accommodations }: AccommodationSearchResultParams) => {
  return <AccommodationContent accommodations={accommodations} />;
};

export default AccommodationSearch;
