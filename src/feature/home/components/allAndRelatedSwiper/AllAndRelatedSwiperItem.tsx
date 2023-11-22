import React from "react";

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

import styled from "styled-components";

const SwiperItemContainer = styled.div`
  width: 16rem;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: 1.5rem 0;

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
    width: 16rem;
    height: 13rem;
    border-radius: 10px 10px 0 0;
  }
`;

const Description = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.b`
  margin-bottom: 1rem;
`;

const Price = styled.p`
  text-align: right;
`;
