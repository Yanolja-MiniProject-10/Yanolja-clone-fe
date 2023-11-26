import { SwiperItemContainer, ImgBox, Description, Title, Price } from "../../styles/allAndRelatedSwiper";
import { AccommodationProp } from "../../home.types";
import { useSetRecoilState } from "recoil";
import { relatedAccommodationsState } from "../../../../recoil/home/clickedData";

const AllAndRelatedSwiperItem = ({ accommodation }: AccommodationProp) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);
  const { name, category, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;

  //이후 삭제 category, region,
  //const Mcategory = "모텔";
  const Mregion = "경기";

  return (
    <SwiperItemContainer
      onClick={() => {
        setRelatedCateRegion({ category: category, region: Mregion });
      }}
    >
      <ImgBox>
        <img src={thumbnailImageUrl} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name}</Title>
        <Price>
          {minimumPrice.toLocaleString()} ~ {maximumPrice.toLocaleString()}원
        </Price>
      </Description>
    </SwiperItemContainer>
  );
};

export default AllAndRelatedSwiperItem;
