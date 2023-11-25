import React from "react";
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

const AccommodationMember = ({ isMemberShow, setIsMemberShow, memberNumber }: MemberProps) => {
  const setAccommodationMemberState = useSetRecoilState(accommodationMemberState);
  return (
    <MemberLayout $isMemberShow={isMemberShow}>
      <MemberContainer>
        <MemberContentBox>
          정확한 숙소검색 결과를 확인하려면 인원수를 선택해주세요.
          <MemberContentPeopleContainer>
            인원
            <MemberContentPeoplePick>
              <button onClick={() => setAccommodationMemberState({ memberNumber: memberNumber - 1 })}> - </button>
              {memberNumber}
              <button onClick={() => setAccommodationMemberState({ memberNumber: memberNumber + 1 })}> + </button>
            </MemberContentPeoplePick>
          </MemberContentPeopleContainer>
        </MemberContentBox>
        <MemberNav>
          <MemberButton
            onClick={() => setIsMemberShow(prev => !prev)}
          >{`인원 ${memberNumber} · 적용하기`}</MemberButton>
        </MemberNav>
      </MemberContainer>
    </MemberLayout>
  );
};

export default AccommodationMember;
