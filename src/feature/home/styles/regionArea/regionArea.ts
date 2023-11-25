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

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
`;

//Slide
const RegionListBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

//Item

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

export { SwiperNavTabs, SwiperTab, SpanTab, RegionListBox, ItemContainer, ImgBox, Description, Title, Price };
