import { CiCalendar } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import accommmodationSample from "../assets/images/accommodationSample.svg";
import AccommodationCalendar from "../components/accommodationCalendar/AccommodationCalendar.tsx";
import AccommodationMember from "../components/accommodationMember/AccommodationMember.tsx";
import { AccommodationProps } from "../feature/accommodation/accommodation.types.ts";
import { useNavigate } from "react-router-dom";
import instance from "../api/instance";
import { AccommodationLayout } from "../feature/accommodation/styles/AccommodationLayout.ts";
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
  const [memberNumber, setMemberNumber] = useState(2);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateRange, setDateRange] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (startDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setEndDate(tomorrow);
    }
  }, []);

  useEffect(() => {
    handleDateShow();
  }, [startDate, endDate]);

  const fetchData = async () => {
    try {
      await instance
        .get("/accommodations", {
          params: { startDate: "2023-11-24", endDate: "2023-12-01", guest: 3 },
        })
        .then(response => setAccommodations(response.data?.data.content));
    } catch (e) {
      console.log(e);
    }
  };

  useQuery({ queryKey: ["Accommodation"], queryFn: fetchData });

  const handleDateShow = () => {
    const targetDate = [startDate, endDate];
    if (!startDate || !endDate) return;

    let returnString = "";
    targetDate.map((singleDate: Date, index: number) => {
      const month = ("0" + (singleDate.getMonth() + 1).toString()).slice(-2);
      const day = ("0" + singleDate.getDate().toString()).slice(-2);
      returnString += month + "." + day;
      if (!index) returnString += " ~ ";
    });

    setDateRange(returnString);
  };

  return (
    <AccommodationLayout>
      <AccommodationInfoBox>
        <AccommodationInfoCalenderBox
          onClick={() => {
            setIsCalendarShow(prev => !prev);
          }}
        >
          <CiCalendar />
          <AccommodationInfoCalenderParagraph>{dateRange}</AccommodationInfoCalenderParagraph>
        </AccommodationInfoCalenderBox>
        <AccommodationInfoMemberBox
          onClick={() => {
            setIsMemberShow(prev => !prev);
          }}
        >
          <IoPeople />
          <AccommodationInfoMemberParagraph>성인 {memberNumber}</AccommodationInfoMemberParagraph>
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
                    <div>
                      <AccommodationContentGridInnerTitle>
                        {singleAccommodation.name}
                      </AccommodationContentGridInnerTitle>
                      <AccommodationContentGridInnerTag>
                        {singleAccommodation.category}
                      </AccommodationContentGridInnerTag>
                    </div>
                    <AccommodationContentGridInnerParagraph>
                      {`${singleAccommodation.minimumPrice.toLocaleString()} ~
                      ${singleAccommodation.maximumPrice.toLocaleString()}`}
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
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      }
      {
        <AccommodationMember
          isMemberShow={isMemberShow}
          setIsMemberShow={setIsMemberShow}
          memberNumber={memberNumber}
          setMemberNumber={setMemberNumber}
        />
      }
    </AccommodationLayout>
  );
};

export default Accommodation;
