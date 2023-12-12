import { ItemContainer, ImgBox, Description, Title, Price } from "../../styles/regionArea/regionAreaItem.ts";
import { AccommodationProp } from "../../home.types.ts";
import { useSetRecoilState } from "recoil";
import { relatedAccommodationsState } from "../../../../recoil/clickedCategoryAndRegion.ts";

const RegionAreaItem = ({ accommodation }: AccommodationProp) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);
  const { id, name, category, region, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;
  return (
    <ItemContainer
      to={`/accommodation/${id}`}
      onClick={() => {
        setRelatedCateRegion({ category: category, region: region });
      }}
    >
      <ImgBox>
        <img src={thumbnailImageUrl} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name.length >= 16 ? name.slice(0, 10) + "..." : name}</Title>
        <Price>
          {minimumPrice.toLocaleString()} ~ {maximumPrice.toLocaleString()}원
        </Price>
      </Description>
    </ItemContainer>
  );
};

export default RegionAreaItem;
