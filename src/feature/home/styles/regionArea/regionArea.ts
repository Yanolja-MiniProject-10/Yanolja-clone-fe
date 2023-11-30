import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

//Tabs
const SwiperNavTabs = styled(Swiper)`
  margin-bottom: 1rem;

  .swiper-slide-thumb-active {
    color: ${({ theme }) => theme.color.mainPink};

    span {
      border-bottom: 3px solid ${({ theme }) => theme.color.mainPink};
    }
  }
`;

const SwiperTab = styled(SwiperSlide)`
  display: flex;
  justify-content: center;

  cursor: pointer;
`;

const SpanTab = styled.span`
  padding: 0 4px 10px;

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

//Slide
const RegionListBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (width < 750px) {
    padding: 2% 8%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

//Item

const ItemContainer = styled(Link)`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  transition: 0.4s;
  &:hover {
    opacity: 70%;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 8rem;

  & > img {
    width: 100%;

    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }

  @media screen and (width < 750px) {
    width: 100%;
    height: 9rem;

    object-fit: cover;
  }
`;

const Description = styled.div`
  padding: 10px 5px;

  display: flex;
  flex-direction: column;

  white-space: nowrap;

  * {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Title = styled.b`
  margin-bottom: 13px;
`;

const Price = styled.p``;

export { SwiperNavTabs, SwiperTab, SpanTab, RegionListBox, ItemContainer, ImgBox, Description, Title, Price };
