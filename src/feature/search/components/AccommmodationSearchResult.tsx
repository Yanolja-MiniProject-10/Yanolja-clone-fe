import * as style from "../styles/AccommodationSearchResult";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { useAccommodationsSearchQuery } from "../hooks/search.hooks";
import { useState, KeyboardEvent, useEffect } from "react";
import { AccommodationSetSearchResultParams } from "../search.types";
import { getSearchValue, setSearchValue } from "../search.utils";

const AccommmodationSearchResult = ({ setAccommodations }: AccommodationSetSearchResultParams) => {
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const prevSearchValue = getSearchValue("searchResult");
    const prevAccommodationValue = getSearchValue("accommodations");
    const prevHistoryIdx = getSearchValue("historyIdx");
    if (prevHistoryIdx === window.history.state.idx && prevSearchValue && prevAccommodationValue.length) {
      setInputValue(prevSearchValue);
      setAccommodations(prevAccommodationValue);
    }
  }, []);

  const { data, status } = useAccommodationsSearchQuery({
    startDate,
    endDate,
    guest,
    name: inputValue,
  });

  const handleEnterpress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue && data?.data.content && status === "success") {
        setSearchValue("searchResult", inputValue);
        setSearchValue("accommodations", data?.data.content);
        setSearchValue("historyIdx", window.history.state.idx);
        setAccommodations(data?.data.content);
      }
    }
  };

  const handleInputValue = () => {
    setInputValue("");
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
      {inputValue ? <style.AccommodationSearchCloseIcon onClick={handleInputValue} /> : null}
    </style.AccommodationSearchInputBox>
  );
};

export default AccommmodationSearchResult;
