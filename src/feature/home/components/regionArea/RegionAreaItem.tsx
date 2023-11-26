import { ItemContainer, ImgBox, Description, Title, Price } from "../../styles/regionArea/regionArea.ts";
import { AccommodationProp } from "../../home.types.ts";

const RegionAreaItem = ({ accommodation }: AccommodationProp) => {
  const { name, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;
  return (
    <ItemContainer>
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
