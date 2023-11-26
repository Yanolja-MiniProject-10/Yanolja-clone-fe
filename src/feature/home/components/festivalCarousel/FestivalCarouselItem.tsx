import { FestivalResponse } from "../../home.types";

const FestivalCarouselItem = ({ title, thumbnailImageUrl }: FestivalResponse) => {
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

import styled from "styled-components";

const BannerContainer = styled.div`
  width: 18rem;
  height: 9rem;
`;

const BackgroundImg = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.box.radius};

  object-fit: cover;
`;
const ColorTitleBox = styled.div`
  position: absolute;
  left: -15px;

  width: 70%;
  height: 101%;
  padding-left: 1rem;

  border-radius: 10px 0 0 10px;
  background-color: #d4e4e7;

  display: flex;
  align-items: center;

  clip-path: polygon(0 0, 60% 0%, 100% 100%, 0% 100%);
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.md};
`;
