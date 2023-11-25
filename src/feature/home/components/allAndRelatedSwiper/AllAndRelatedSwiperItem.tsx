import React from "react";
import { SwiperItemContainer, ImgBox, Description, Title, Price } from "../../styles/allAndRelatedSwiper";
import { AccommodationItemProps } from "../../home.types";

const AllAndRelatedSwiperItem = ({ name, thumbnail, minPrice, maxPrice }: AccommodationItemProps) => {
  return (
    <SwiperItemContainer>
      <ImgBox>
        <img src={thumbnail} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name}</Title>
        <Price>
          {minPrice.toLocaleString()} ~ {maxPrice.toLocaleString()}원
        </Price>
      </Description>
    </SwiperItemContainer>
  );
};

export default AllAndRelatedSwiperItem;
