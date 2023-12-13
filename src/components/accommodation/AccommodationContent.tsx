import { AccommodationProps } from "../../feature/accommodation/accommodation.types";
import { AccommodationDataProps } from "./accommodation.types";
import * as style from "../../feature/accommodation/styles/accommodationContent";
import accommmodationSample from "../../assets/images/accommodationSample.svg";
import { handleTitlelength } from "../../feature/accommodation/accommodation.utils";
import { relatedAccommodationsState } from "../../recoil/clickedCategoryAndRegion";
import { useSetRecoilState } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const AccommodationContent = ({ accommodations }: AccommodationDataProps) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);
  const [accommodationScrollLists, setAccommodationScrollLists] = useState<AccommodationProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    accommodations.length > 10
      ? setAccommodationScrollLists(accommodations.slice(0, 10))
      : setAccommodationScrollLists(accommodations);
  }, [accommodations]);

  const handleDataLoad = () => {
    if (accommodations.length <= accommodationScrollLists.length) return;

    accommodations.length >= (pageNumber + 1) * 10
      ? setAccommodationScrollLists([...accommodationScrollLists, ...accommodations.slice(pageNumber, pageNumber + 10)])
      : setAccommodationScrollLists([
          ...accommodationScrollLists,
          ...accommodations.slice(pageNumber * 10, accommodations.length),
        ]);

    setPageNumber(prev => prev + 1);
  };

  return (
    <style.AccommodationContentBox>
      <style.AccommodationContentTitleParagraph>
        <span style={{ fontWeight: 600 }}>{accommodations.length}</span>개의 숙소
      </style.AccommodationContentTitleParagraph>
      <InfiniteScroll
        dataLength={accommodationScrollLists.length}
        next={handleDataLoad}
        hasMore={true}
        loader={<div></div>}
        className="infi"
      >
        <style.AccommodationContentGrid>
          {accommodationScrollLists.length ? (
            accommodationScrollLists.map((singleAccommodation: AccommodationProps) => (
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
                      singleAccommodation.thumbnailImageUrl
                        ? singleAccommodation.thumbnailImageUrl
                        : accommmodationSample
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
                    <style.AccommodationContentGridInnerPriceBox>
                      <style.AccommodationContentGridInnerParagraph>
                        {`${singleAccommodation.minimumPrice.toLocaleString()} ~ ${singleAccommodation.maximumPrice.toLocaleString()}원`}
                      </style.AccommodationContentGridInnerParagraph>
                    </style.AccommodationContentGridInnerPriceBox>
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
      </InfiniteScroll>
    </style.AccommodationContentBox>
  );
};

export default AccommodationContent;
