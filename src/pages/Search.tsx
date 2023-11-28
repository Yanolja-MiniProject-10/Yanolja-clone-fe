import AccommodationNav from "../components/accommodation/AccommodationNav";
import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout";
import AccommmodationSearchResult from "../feature/search/components/AccommmodationSearchResult";
import AccommodationSearch from "../feature/search/components/AccommodationSearch";

const Search = () => {
  return (
    <AccommodationLayout>
      <AccommmodationSearchResult />
      <AccommodationNav />
      <AccommodationSearch />
    </AccommodationLayout>
  );
};

export default Search;
