/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { AccommodationProps } from "../../feature/accommodation/accommodation.types";
import * as style from "../../feature/accommodation/styles/accommodationContent";
import { useEffect, useState } from "react";
import accommmodationSample from "../../assets/images/accommodationSample.svg";
import { useAccommodationsListQuery } from "../../feature/accommodation/hooks/accommodation.hooks";
import { accommodationDateState } from "../../recoil/accommodation/accommodationDate";
import { accommodationMemberState } from "../../recoil/accommodation/accommodationMember";
import { useRecoilValue } from "recoil";

const AccommodationContent = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>([]);
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const navigate = useNavigate();

  const { status, data, error } = useAccommodationsListQuery({ startDate, endDate, guest });

  if (status === "error") {
    console.log(error.message);
  }

  useEffect(() => {
    if (status === "success" && data.data.content) {
      setAccommodations(data.data.content);
    }
  }, [startDate, endDate, guest]);

  return (
    <style.AccommodationContentBox>
      <style.AccommodationContentTitleParagraph>
        {accommodations.length}개의 숙소
      </style.AccommodationContentTitleParagraph>
      <style.AccommodationContentGrid>
        {accommodations.length
          ? accommodations.map((singleAccommodation: AccommodationProps) => (
              <style.AccommodationContentGridContainer
                key={singleAccommodation.id}
                onClick={() => navigate(`${singleAccommodation.id}`)}
              >
                <style.AccommodationContentGridImg
                  src={
                    singleAccommodation.thumbnailImageUrl ? singleAccommodation.thumbnailImageUrl : accommmodationSample
                  }
                />
                <style.AccommodationContentGridInnerBox>
                  <div style={{ paddingTop: "0.5rem" }}>
                    <style.AccommodationContentGridInnerTitle>
                      {singleAccommodation.name}
                    </style.AccommodationContentGridInnerTitle>
                    <style.AccommodationContentGridInnerTag>
                      {singleAccommodation.category}
                    </style.AccommodationContentGridInnerTag>
                  </div>
                  <style.AccommodationContentGridInnerParagraph>
                    {`${singleAccommodation.minimumPrice.toLocaleString()} ~
                      ${singleAccommodation.maximumPrice.toLocaleString()} 원`}
                  </style.AccommodationContentGridInnerParagraph>
                </style.AccommodationContentGridInnerBox>
              </style.AccommodationContentGridContainer>
            ))
          : "해당 숙소가 없습니다."}
      </style.AccommodationContentGrid>
    </style.AccommodationContentBox>
  );
};

export default AccommodationContent;
