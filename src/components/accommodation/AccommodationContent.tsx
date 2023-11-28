import { useNavigate } from "react-router-dom";
import { AccommodationProps } from "../../feature/accommodation/accommodation.types";
import { AccommodationDataProps } from "./accommodation.types";
import * as style from "../../feature/accommodation/styles/accommodationContent";
import accommmodationSample from "../../assets/images/accommodationSample.svg";
import { handleTitlelength } from "../../feature/accommodation/accommodation.utils";

const AccommodationContent = ({ accommodations }: AccommodationDataProps) => {
  const navigate = useNavigate();

  return (
    <style.AccommodationContentBox>
      <style.AccommodationContentTitleParagraph>
        <span style={{ fontWeight: 600 }}>{accommodations.length}</span>개의 숙소
      </style.AccommodationContentTitleParagraph>
      <style.AccommodationContentGrid>
        {accommodations.length
          ? accommodations.map((singleAccommodation: AccommodationProps) => (
              <style.AccommodationContentGridContainer
                key={singleAccommodation.id}
                onClick={() => navigate(`/accommodation/${singleAccommodation.id}`)}
              >
                <style.AccommodationContentGridImg
                  src={
                    singleAccommodation.thumbnailImageUrl ? singleAccommodation.thumbnailImageUrl : accommmodationSample
                  }
                />
                <style.AccommodationContentGridInnerBox>
                  <div style={{ paddingTop: "0.5rem" }}>
                    <style.AccommodationContentGridInnerTitle
                      style={{ fontSize: handleTitlelength(singleAccommodation.name) }}
                    >
                      {singleAccommodation.name}
                    </style.AccommodationContentGridInnerTitle>
                    <style.AccommodationContentGridInnerTag>
                      {singleAccommodation.category}
                    </style.AccommodationContentGridInnerTag>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <style.AccommodationContentGridInnerParagraph>
                      {`${singleAccommodation.minimumPrice.toLocaleString()} ~ `}
                      <br />
                      {`${singleAccommodation.maximumPrice.toLocaleString()} 원`}
                    </style.AccommodationContentGridInnerParagraph>
                  </div>
                </style.AccommodationContentGridInnerBox>
              </style.AccommodationContentGridContainer>
            ))
          : "해당 숙소가 없습니다."}
      </style.AccommodationContentGrid>
    </style.AccommodationContentBox>
  );
};

export default AccommodationContent;
