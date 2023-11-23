import React from "react";
import { SwiperItemContainer, ImgBox, Description, Title, Price } from "../../styles/allAndRelatedSwiper";

const AllAndRelatedSwiperItem = ({ name, thumbnail, minPrice, maxPrice }) => {
  return (
    <SwiperItemContainer>
      <ImgBox>
        <img src={thumbnail} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name}</Title>
        <Price>
          {minPrice.toLocaleString()} ~ {maxPrice.toLocaleString()}
        </Price>
      </Description>
    </SwiperItemContainer>
  );
};

export default AllAndRelatedSwiperItem;
