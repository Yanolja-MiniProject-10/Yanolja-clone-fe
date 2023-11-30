import { AccommodationProps } from "../../feature/accommodation/accommodation.types";
import { AccommodationDataProps } from "./accommodation.types";
import * as style from "../../feature/accommodation/styles/accommodationContent";
import accommmodationSample from "../../assets/images/accommodationSample.svg";
import { handleTitlelength } from "../../feature/accommodation/accommodation.utils";
import { relatedAccommodationsState } from "../../recoil/home/clickedCategoryAndRegion";
import { useSetRecoilState } from "recoil";

const AccommodationContent = ({ accommodations }: AccommodationDataProps) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);

  return (
    <style.AccommodationContentBox>
      <style.AccommodationContentTitleParagraph>
        <span style={{ fontWeight: 600 }}>{accommodations.length}</span>개의 숙소
      </style.AccommodationContentTitleParagraph>
      <style.AccommodationContentGrid>
        {accommodations.length ? (
          accommodations.map((singleAccommodation: AccommodationProps) => (
            <style.AccommodationContentLink
              to={`/accommodation/${singleAccommodation.id}`}
              key={singleAccommodation.id}
              onClick={() =>
                setRelatedCateRegion({ category: singleAccommodation.category, region: singleAccommodation.region })
              }
            >
              <style.AccommodationContentGridContainer>
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
                      {`${singleAccommodation.maximumPrice.toLocaleString()}원`}
                    </style.AccommodationContentGridInnerParagraph>
                  </div>
                </style.AccommodationContentGridInnerBox>
              </style.AccommodationContentGridContainer>
            </style.AccommodationContentLink>
          ))
        ) : (
          <style.AccommodationContentNotExists>
            <p>해당 숙소가 없습니다.</p>
          </style.AccommodationContentNotExists>
        )}
      </style.AccommodationContentGrid>
    </style.AccommodationContentBox>
  );
};

export default AccommodationContent;
