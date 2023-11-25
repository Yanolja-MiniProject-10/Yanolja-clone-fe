import React from "react";
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
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const ColorTitleBox = styled.div`
  width: 70%;
  height: 101%;
  padding-left: 1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: ${({ theme }) => theme.box.shadow};
  display: flex;
  align-items: center;
  background-color: #d4e4e7;
  clip-path: polygon(0 0, 60% 0%, 100% 100%, 0% 100%);
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.md};
`;
