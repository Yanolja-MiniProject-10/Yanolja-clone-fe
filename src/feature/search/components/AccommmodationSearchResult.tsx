import * as style from "../styles/AccommodationSearchResult";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { useAccommodationsSearchQuery } from "../hooks/search.hooks";
import { useState, KeyboardEvent, useEffect } from "react";
import { AccommodationSetSearchResultParams } from "../search.types";
import { getSessionValue, setSessionValue } from "../../../util/searchSessionValue";
import { Loading, LoadingWrapper } from "../../../styles/loading";
import { useNavigate } from "react-router-dom";

const AccommmodationSearchResult = ({ setAccommodations }: AccommodationSetSearchResultParams) => {
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const [inputValue, setInputValue] = useState("");
  const { data, status, isLoading } = useAccommodationsSearchQuery({
    startDate,
    endDate,
    guest,
    name: inputValue,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const prevSearchValue = getSessionValue("searchResult");
    const prevAccommodationValue = getSessionValue("accommodations");
    const prevHistoryIdx = getSessionValue("historyIdx");
    setSessionValue("historyPage", "search");
    if (prevHistoryIdx === window.history.state.idx && prevSearchValue && prevAccommodationValue.length) {
      setInputValue(prevSearchValue);
      setAccommodations(prevAccommodationValue);
    }
  }, []);

  useEffect(() => {
    if (status === "error") {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigate("/");
    }
  }, [status]);

  const handleEnterpress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!inputValue) return;

      if (data?.data?.content && status === "success") {
        setSessionValue("searchResult", inputValue);
        setSessionValue("accommodations", data?.data.content);
        setSessionValue("historyIdx", window.history.state.idx);
        setAccommodations(data?.data?.content);
      }
    }
  };

  const handleInputValue = () => {
    setInputValue("");
  };

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
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
