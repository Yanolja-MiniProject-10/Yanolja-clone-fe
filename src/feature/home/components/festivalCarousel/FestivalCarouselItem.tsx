import { Festival } from "../../home.types";
import { BannerContainer, BackgroundImg, ColorTitleBox, Title } from "../../styles/festivalCarousel";

interface FestivalProps {
  festival: Festival;
}

const FestivalCarouselItem = ({ festival }: FestivalProps) => {
  const { thumbnailImageUrl, title } = festival;

  return (
    <BannerContainer>
      <BackgroundImg style={{ backgroundImage: `url(${thumbnailImageUrl})` }}>
        <ColorTitleBox>
          <Title>{title}</Title>
        </ColorTitleBox>
      </BackgroundImg>
    </BannerContainer>
  );
};

export default FestivalCarouselItem;
