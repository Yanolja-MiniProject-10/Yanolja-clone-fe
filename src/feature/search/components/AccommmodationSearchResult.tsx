import { IoSearch } from "react-icons/io5";
import { AccommodationSearchInputBox } from "../../category/styles/AccommodationSearchResult";

const AccommmodationSearchResult = () => {
  return (
    <>
      {IoSearch}
      <AccommodationSearchInputBox placeholder="숙소를 검색하세요" />
    </>
  );
};

export default AccommmodationSearchResult;
