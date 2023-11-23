import React from "react";

const RegionAreaItem = ({ name, thumbnail, minPrice, maxPrice }) => {
  return (
    <ItemContainer>
      <ImgBox>
        <img src={thumbnail} alt={name} />
      </ImgBox>
      <Description>
        <b>{name}</b>
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
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: 1rem;
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
    height: 5rem;
    border-radius: 10px 10px 0 0;
  }
`;

const Description = styled.div`
  padding: 10px 1rem;
  display: flex;
  flex-direction: column;
`;

const Price = styled.p`
  text-align: right;
`;
