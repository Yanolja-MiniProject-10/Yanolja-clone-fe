import * as style from "./accommodationMember.styles";
import { MemberProps } from "./accommodationMember.types";
import { useSetRecoilState } from "recoil";
import { accommodationMemberState } from "../../recoil/accommodationMember";
import { useEffect, useState } from "react";

const AccommodationMember = ({ isMemberShow, setIsMemberShow, memberNumber }: MemberProps) => {
  const setAccommodationMemberState = useSetRecoilState(accommodationMemberState);
  const [memberCount, setMemberCount] = useState(memberNumber);
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setPlusDisabled] = useState(false);

  useEffect(() => {
    if (!isMemberShow) {
      if (memberCount !== memberNumber) {
        setMemberCount(memberNumber);
      }
    }
  }, [isMemberShow]);

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
    <style.MemberLayout $isMemberShow={isMemberShow}>
      <style.MemberContainer>
        <style.MemberContentBox>
          <style.MemberContentInfoBox>
            <span>정확한 숙소검색 결과를 확인하려면 인원수를 선택해주세요.</span>
            <style.MemberContentInfoCloseIcon onClick={() => setIsMemberShow(prev => !prev)} />
          </style.MemberContentInfoBox>
          <style.MemberContentPeopleContainer>
            <span>인원</span>
            <style.MemberContentPeoplePick>
              <button disabled={minusDisabled} onClick={() => handleSetMember("minus")}>
                <span>-</span>
              </button>
              {memberCount}
              <button disabled={plusDisabled} onClick={() => handleSetMember("plus")}>
                <span>+</span>
              </button>
            </style.MemberContentPeoplePick>
          </style.MemberContentPeopleContainer>
        </style.MemberContentBox>
        <style.MemberNav>
          <style.MemberButton onClick={handleMemberCount}>{`인원 ${memberCount} · 적용하기`}</style.MemberButton>
        </style.MemberNav>
      </style.MemberContainer>
    </style.MemberLayout>
  );
};

export default AccommodationMember;
