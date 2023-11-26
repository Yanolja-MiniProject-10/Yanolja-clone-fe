import { IoPeople, IoCalendarClearOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { accommodationDateState } from "../recoil/accommodation/accommodationDate.ts";
import { accommodationMemberState } from "../recoil/accommodation/accommodationMember.ts";
import accommmodationSample from "../assets/images/accommodationSample.svg";
import AccommodationCalendar from "../components/accommodationCalendar/AccommodationCalendar.tsx";
import AccommodationMember from "../components/accommodationMember/AccommodationMember.tsx";
import { AccommodationProps } from "../feature/accommodation/accommodation.types.ts";
import { useNavigate } from "react-router-dom";
import instance from "../api/instance";
import { handleDateString } from "../feature/accommodation/accommodation.utils.ts";
import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout.ts";
import {
  AccommodationInfoBox,
  AccommodationInfoCalenderBox,
  AccommodationInfoCalenderParagraph,
  AccommodationInfoMemberBox,
  AccommodationInfoMemberParagraph,
  AccommodationInfoRegionBox,
  AccommodationInfoRegionSelect,
} from "../feature/accommodation/styles/accommodationInfo.ts";
import {
  AccommodationContentBox,
  AccommodationContentTitleParagraph,
  AccommodationContentGrid,
  AccommodationContentGridContainer,
  AccommodationContentGridImg,
  AccommodationContentGridInnerBox,
  AccommodationContentGridInnerTitle,
  AccommodationContentGridInnerTag,
  AccommodationContentGridInnerParagraph,
} from "../feature/accommodation/styles/accommodationContent.ts";

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);
  const [isMemberShow, setIsMemberShow] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<string | undefined>("");
  const navigate = useNavigate();
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { memberNumber } = useRecoilValue(accommodationMemberState);

  useEffect(() => {
    if (startDate && endDate) {
      setDateRange(handleDateString(startDate, endDate));
    }
  }, [startDate, endDate]);

  const getData = useQuery({
    queryKey: ["Accommodation"],
    queryFn: async () => {
      // const setData = handleDateParam(startDate, endDate);
      await instance
        .get(`/accommodations`, {
          params: { startDate: "2023-11-25", endDate: "2023-11-26", guest: 2 },
        })
        .then(response => setAccommodations(response.data.data.content));
    },
  });

  if (getData.isError) {
    console.log(getData.error.message, ": 알 수 없는 오류입니다.");
  }

  return (
    <AccommodationLayout>
      <AccommodationInfoBox>
        <AccommodationInfoCalenderBox
          onClick={() => {
            setIsCalendarShow(prev => !prev);
          }}
        >
          <IoCalendarClearOutline />
          <AccommodationInfoCalenderParagraph>{dateRange}</AccommodationInfoCalenderParagraph>
        </AccommodationInfoCalenderBox>
        <AccommodationInfoMemberBox
          onClick={() => {
            setIsMemberShow(prev => !prev);
          }}
        >
          <IoPeople />
          <AccommodationInfoMemberParagraph>인원 {memberNumber}</AccommodationInfoMemberParagraph>
        </AccommodationInfoMemberBox>
        <AccommodationInfoRegionBox>
          <AccommodationInfoRegionSelect />
        </AccommodationInfoRegionBox>
      </AccommodationInfoBox>
      <AccommodationContentBox>
        <AccommodationContentTitleParagraph>{accommodations.length}개의 숙소</AccommodationContentTitleParagraph>
        <AccommodationContentGrid>
          {accommodations.length
            ? accommodations.map((singleAccommodation: AccommodationProps) => (
                <AccommodationContentGridContainer
                  key={singleAccommodation.id}
                  onClick={() => navigate(`${singleAccommodation.id}`)}
                >
                  <AccommodationContentGridImg
                    src={
                      singleAccommodation.thumbnailImageUrl
                        ? singleAccommodation.thumbnailImageUrl
                        : accommmodationSample
                    }
                  />
                  <AccommodationContentGridInnerBox>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <AccommodationContentGridInnerTitle>
                        {singleAccommodation.name}
                      </AccommodationContentGridInnerTitle>
                      <AccommodationContentGridInnerTag>
                        {singleAccommodation.category}
                      </AccommodationContentGridInnerTag>
                    </div>
                    <AccommodationContentGridInnerParagraph>
                      {`${singleAccommodation.minimumPrice.toLocaleString()} ~
                      ${singleAccommodation.maximumPrice.toLocaleString()} 원`}
                    </AccommodationContentGridInnerParagraph>
                  </AccommodationContentGridInnerBox>
                </AccommodationContentGridContainer>
              ))
            : "해당 숙소가 없습니다."}
        </AccommodationContentGrid>
      </AccommodationContentBox>
      {
        <AccommodationCalendar
          isCalendarShow={isCalendarShow}
          setIsCalendarShow={setIsCalendarShow}
          startDate={startDate}
          endDate={endDate}
        />
      }
      {
        <AccommodationMember
          isMemberShow={isMemberShow}
          setIsMemberShow={setIsMemberShow}
          memberNumber={memberNumber}
        />
      }
    </AccommodationLayout>
  );
};

export default Accommodation;
