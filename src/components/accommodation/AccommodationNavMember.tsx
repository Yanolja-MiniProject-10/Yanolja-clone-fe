import { IoPeople } from "react-icons/io5";
import * as style from "../../feature/accommodation/styles/accommodationInfo.ts";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { accommodationMemberState } from "../../recoil/accommodationMember.ts";
import AccommodationMember from "../accommodationMember/AccommodationMember.tsx";

const AccommodationInfoMember = () => {
  const [isMemberShow, setIsMemberShow] = useState<boolean>(false);
  const { guest } = useRecoilValue(accommodationMemberState);

  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsMemberShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>인원 {guest}</style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationMember isMemberShow={isMemberShow} setIsMemberShow={setIsMemberShow} memberNumber={guest} />
    </>
  );
};

export default AccommodationInfoMember;
