import * as style from "../../feature/accommodation/styles/accommodationInfo";
import { useSetRecoilState } from "recoil";
import { accommodationRegionState } from "../../recoil/accommodation/accommodationRegion";

const AccommodationRegion = () => {
  const setAccommodationRegionState = useSetRecoilState(accommodationRegionState);
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "default") {
      setAccommodationRegionState({
        region: e.target.value,
      });
    }
  };
  return (
    <style.AccommodationInfoRegionBox>
      <style.AccommodationInfoRegionSelect onChange={handleRegionChange}>
        <option value="default">지역을 선택해주세요.</option>
        <option value="서울">서울</option>
        <option value="강원">강원</option>
        <option value="경기">경기</option>
        <option value="제주">제주</option>
      </style.AccommodationInfoRegionSelect>
    </style.AccommodationInfoRegionBox>
  );
};

export default AccommodationRegion;
