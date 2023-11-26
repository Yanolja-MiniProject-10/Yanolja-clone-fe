import { IoPeople } from "react-icons/io5";
import * as style from "../styles/accommodationInfo.ts";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember.ts";
import AccommodationMember from "../../../components/accommodationMember/AccommodationMember.tsx";

const AccommodationInfoMember = () => {
  const [isMemberShow, setIsMemberShow] = useState<boolean>(false);
  const { memberNumber } = useRecoilValue(accommodationMemberState);

  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsMemberShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>인원 {memberNumber}</style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationMember isMemberShow={isMemberShow} setIsMemberShow={setIsMemberShow} memberNumber={memberNumber} />
    </>
  );
};

export default AccommodationInfoMember;
