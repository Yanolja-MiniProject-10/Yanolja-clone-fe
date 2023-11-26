import {
  RankingItemWrapper,
  NumberBox,
  StyledLink,
  ImageBox,
  Description,
  Name,
  Price,
} from "../../styles/rankingArea/rankingAreaItem";
import { Accommodation } from "../../home.types";

interface RankinItemProps {
  index: number;
  accommodation: Accommodation;
}

const RankingAreaItem = ({ index, accommodation }: RankinItemProps) => {
  const { id, name, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;

  return (
    <RankingItemWrapper>
      <NumberBox>
        <p>{index}</p>
      </NumberBox>
      <StyledLink to={`/accommodation/${id}`}>
        <ImageBox>
          <img src={thumbnailImageUrl} alt={name} />
        </ImageBox>
        <Description>
          <Name>{name}</Name>
          <Price>
            {minimumPrice.toLocaleString()} ~<br />
            {maximumPrice.toLocaleString()}원
          </Price>
        </Description>
      </StyledLink>
    </RankingItemWrapper>
  );
};

export default RankingAreaItem;
