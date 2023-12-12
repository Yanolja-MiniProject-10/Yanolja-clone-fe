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
import { useSetRecoilState } from "recoil";
import { relatedAccommodationsState } from "../../../../recoil/clickedCategoryAndRegion";

interface RankinItemProps {
  index: number;
  accommodation: Accommodation;
}

const RankingAreaItem = ({ index, accommodation }: RankinItemProps) => {
  const setRelatedCateRegion = useSetRecoilState(relatedAccommodationsState);
  const { id, category, region, name, thumbnailImageUrl, minimumPrice, maximumPrice } = accommodation;

  return (
    <RankingItemWrapper
      onClick={() => {
        setRelatedCateRegion({ category: category, region: region });
      }}
    >
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
            {minimumPrice.toLocaleString()} ~{maximumPrice.toLocaleString()}원
          </Price>
        </Description>
      </StyledLink>
    </RankingItemWrapper>
  );
};

export default RankingAreaItem;
