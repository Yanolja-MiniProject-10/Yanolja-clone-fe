import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import accommmodationSample from "../assets/images/accommodationSample.svg";
import AccommodationCalender from "../feature/accommodation/components/AccommodationCalendar";
import AccommodationMember from "../feature/accommodation/components/AccommodationMember";
import { useNavigate } from "react-router-dom";

const AccommodationLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  position: relative;
  margin: 30px auto 0 auto;
`;

const AccommodationInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const AccommodationInfoCalenderBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};
`;

const AccommodationInfoCalenderParagraph = styled.p`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding-left: 0.5rem;
`;
const AccommodationInfoMemberBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};
`;
const AccommodationInfoMemberParagraph = styled.p`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding-left: 0.5rem;
`;

const AccommodationInfoRegionBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: 10px;
`;

const AccommodationInfoRegionSelect = styled.select`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding: 0 0.5rem;
`;

const AccommodationContentBox = styled.div``;

const AccommodationContentTitleParagraph = styled.p`
  padding: 1rem 0;
`;

const AccommodationContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: scroll;
  max-height: 80vh;

  &::-webkit-scrollbar {
    width: 8px;
    display: none;
    overflow-y: scroll;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const AccommodationContentGridContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 9rem;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
`;

const AccommodationContentGridImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

const AccommodationContentGridInnerBox = styled.div`
  display: flex;
  height: 100%;
  padding-left: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AccommodationContentGridInnerParagraph = styled.p``;

const instance = axios.create({
  baseURL: "http://ec2-13-124-249-117.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState<object[]>([]);
  const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);
  const [isMemberShow, setIsMemberShow] = useState<boolean>(false);
  const [memberNumber, setMemberNumber] = useState(2);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      await instance
        .get("/accommodations", { params: { startDate: "2023-11-23", endDate: "2023-12-24", guest: 2 } })
        .then(response => setAccommodations(response.data?.data.content));
    } catch (e) {
      console.log(e);
    }
  };

  useQuery({ queryKey: ["Accommodation"], queryFn: fetchData });

  return (
    <AccommodationLayout>
      <AccommodationInfoBox>
        <AccommodationInfoCalenderBox
          onClick={() => {
            setIsCalendarShow(prev => !prev);
          }}
        >
          <CiCalendar />
          <AccommodationInfoCalenderParagraph>날짜를 선택해주세요.</AccommodationInfoCalenderParagraph>
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
          <AccommodationInfoRegionSelect>
            {/* <option value="" className="default" disabled selected>
              지역을 선택해주세요.
            </option>
            <option value="seoul">서울</option>
            <option value="gangwon">강원</option>
            <option value="gyeonggi">경기</option>
            <option value="jeju">제주</option> */}
          </AccommodationInfoRegionSelect>
        </AccommodationInfoRegionBox>
      </AccommodationInfoBox>
      <AccommodationContentBox>
        <AccommodationContentTitleParagraph>{accommodations.length}개의 숙소</AccommodationContentTitleParagraph>
        <AccommodationContentGrid>
          {accommodations.length
            ? accommodations.map((singleAccommodation: any) => (
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
                    <AccommodationContentGridInnerParagraph>
                      {singleAccommodation.name}
                    </AccommodationContentGridInnerParagraph>
                    <AccommodationContentGridInnerParagraph>
                      {singleAccommodation.minimumPrice.toLocaleString()} ~
                    </AccommodationContentGridInnerParagraph>
                    <AccommodationContentGridInnerParagraph>
                      {singleAccommodation.maximumPrice.toLocaleString()}
                    </AccommodationContentGridInnerParagraph>
                  </AccommodationContentGridInnerBox>
                </AccommodationContentGridContainer>
              ))
            : "해당 숙소가 없습니다."}
        </AccommodationContentGrid>
      </AccommodationContentBox>
      {<AccommodationCalender isCalendarShow={isCalendarShow} setIsCalendarShow={setIsCalendarShow} />}
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
