import React from "react";
import { Link } from "react-router-dom";
import {
  RankingItemWrapper,
  NumberBox,
  StyledLink,
  ImageBox,
  Description,
  Name,
  Price,
} from "../../styles/rankingArea/rankingAreaItem";
import { AccommodationItemProps } from "../../home.types";

const RankingAreaItem = ({ id, index, name, thumbnail, minPrice, maxPrice }: AccommodationItemProps) => {
  return (
    <RankingItemWrapper>
      <NumberBox>
        <p>{index}</p>
      </NumberBox>
      <StyledLink to={`/accommodation/${id}`}>
        <ImageBox>
          <img src={thumbnail} alt={name} />
        </ImageBox>
        <Description>
          <Name>{name}</Name>
          <Price>
            {minPrice.toLocaleString()} ~<br />
            {maxPrice.toLocaleString()}원
          </Price>
        </Description>
      </StyledLink>
    </RankingItemWrapper>
  );
};

export default RankingAreaItem;
