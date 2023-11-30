import {
  MemberLayout,
  MemberContainer,
  MemberContentBox,
  MemberContentPeopleContainer,
  MemberContentPeoplePick,
  MemberNav,
  MemberButton,
} from "./AccommodationMember";
import { MemberProps } from "./accommodationMember.types";
import { useSetRecoilState } from "recoil";
import { accommodationMemberState } from "../../recoil/accommodation/accommodationMember";
import { useEffect, useState } from "react";

const AccommodationMember = ({ isMemberShow, setIsMemberShow, memberNumber }: MemberProps) => {
  const setAccommodationMemberState = useSetRecoilState(accommodationMemberState);
  const [memberCount, setMemberCount] = useState(memberNumber);
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setPlusDisabled] = useState(false);

  useEffect(() => {
    if (memberCount !== memberNumber) {
      setMemberCount(memberNumber);
    }
  }, [memberNumber]);

  const handleSetMember = (type: string) => {
    type === "plus" ? setMemberCount(prev => prev + 1) : setMemberCount(prev => prev - 1);
  };

  useEffect(() => {
    if (memberCount < 2) {
      setMinusDisabled(true);
      setPlusDisabled(false);
      return;
    }

    if (memberCount >= 2) {
      if (memberCount > 29) {
        setPlusDisabled(true);
        return;
      }
      setPlusDisabled(false);
      setMinusDisabled(false);
    }
  }, [memberCount]);

  const handleMemberCount = () => {
    setIsMemberShow(prev => !prev);
    setAccommodationMemberState({ guest: memberCount });
  };
  return (
    <MemberLayout $isMemberShow={isMemberShow}>
      <MemberContainer>
        <MemberContentBox>
          정확한 숙소검색 결과를 확인하려면 인원수를 선택해주세요.
          <MemberContentPeopleContainer>
            인원
            <MemberContentPeoplePick>
              <button disabled={minusDisabled} onClick={() => handleSetMember("minus")}>
                -
              </button>
              {memberCount}
              <button disabled={plusDisabled} onClick={() => handleSetMember("plus")}>
                +
              </button>
            </MemberContentPeoplePick>
          </MemberContentPeopleContainer>
        </MemberContentBox>
        <MemberNav>
          <MemberButton onClick={handleMemberCount}>{`인원 ${memberCount} · 적용하기`}</MemberButton>
        </MemberNav>
      </MemberContainer>
    </MemberLayout>
  );
};

export default AccommodationMember;
