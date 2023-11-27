import { ItemContainer, ImgBox, Description, Title, Price } from "../../styles/regionArea/regionArea.ts";
import { AccommodationProp } from "../../home.types.ts";
import { useSetRecoilState } from "recoil";
import { relatedAccommodationsState } from "../../../../recoil/home/clickedData.ts";

const RegionAreaItem = ({ accommodation }: AccommodationProp) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);
  const { name, category, region, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;
  return (
    <ItemContainer
      onClick={() => {
        setRelatedCateRegion({ category: category, region: region });
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
    </ItemContainer>
  );
};

export default RegionAreaItem;
