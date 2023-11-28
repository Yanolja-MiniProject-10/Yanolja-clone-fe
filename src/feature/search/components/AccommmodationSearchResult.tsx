import * as style from "../styles/AccommodationSearchResult";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { useAccommodationsSearchQuery } from "../hooks/search.hooks";
import { useState, KeyboardEvent } from "react";
import { AccommodationSetSearchResultParams } from "../search.types";

const AccommmodationSearchResult = ({ setAccommodations }: AccommodationSetSearchResultParams) => {
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const [inputValue, setInputValue] = useState("");

  const { data, status } = useAccommodationsSearchQuery({
    startDate,
    endDate,
    guest,
    name: inputValue,
  });

  const handleEnterpress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue && data.data.content && status === "success") {
        setAccommodations(data.data.content);
      }
    }
  };

  return (
    <style.AccommodationSearchInputBox>
      <style.AccommodationSearchIcon />
      <style.AccommodationSearchInput
        placeholder="숙소를 검색하세요"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onKeyUp={handleEnterpress}
      />
    </style.AccommodationSearchInputBox>
  );
};

export default AccommmodationSearchResult;
