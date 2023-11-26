import { ItemContainer, ImgBox, Description, Title, Price } from "../../styles/regionArea/regionArea.ts";
import { AccommodationItemProps } from "../../home.types.ts";

const RegionAreaItem = ({ name, thumbnail, minPrice, maxPrice }: AccommodationItemProps) => {
  return (
    <ItemContainer>
      <ImgBox>
        <img src={thumbnail} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name}</Title>
        <Price>
          {minPrice.toLocaleString()} ~ {maxPrice.toLocaleString()}원
        </Price>
      </Description>
    </ItemContainer>
  );
};

export default RegionAreaItem;
