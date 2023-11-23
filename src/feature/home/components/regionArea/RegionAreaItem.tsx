import React from "react";

const RegionAreaItem = ({ name, thumbnail, minPrice, maxPrice }) => {
  return (
    <ItemContainer>
      <ImgBox>
        <img src={thumbnail} alt={name} />
      </ImgBox>
      <Description>
        <Title>{name}</Title>
        <Price>
          {minPrice.toLocaleString()} ~ {maxPrice.toLocaleString()}
        </Price>
      </Description>
    </ItemContainer>
  );
};

export default RegionAreaItem;

import styled from "styled-components";

const ItemContainer = styled.div`
  width: 11rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  transition: 0.4s;
  &:hover {
    opacity: 70%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  object-fit: cover;

  & > img {
    width: 100%;
    height: 8rem;
    border-radius: 3px;
  }
`;

const Description = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 10px;
`;

const Price = styled.b`
  text-align: right;
`;
