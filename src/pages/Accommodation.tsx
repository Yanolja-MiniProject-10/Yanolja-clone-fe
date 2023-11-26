import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import accommmodationSample from "../assets/images/accommodationSample.svg";
import { AccommodationProps } from "../feature/accommodation/accommodation.types.ts";
import { useNavigate } from "react-router-dom";
import instance from "../api/instance";
import { AccommodationLayout } from "../feature/accommodation/styles/accommodationLayout.ts";
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
import AccommodationNav from "../feature/accommodation/components/AccommodationNav.tsx";

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const navigate = useNavigate();

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
    // console.log(getData.error.message, ": 알 수 없는 오류입니다.");
  }

  return (
    <AccommodationLayout>
      <AccommodationNav />
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
    </AccommodationLayout>
  );
};

export default Accommodation;
