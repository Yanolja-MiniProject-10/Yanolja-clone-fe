import styled from "styled-components";

const CustomNavigation = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.color.middleGray};
  }
`;

//Item style
const SwiperItemContainer = styled.div`
  width: 10rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.box.shadow};
  border-radius: 5px;

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
    height: 10rem;
    border-radius: 5px 5px 0 0;
  }
`;

const Description = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 1rem;
`;

const Price = styled.b`
  text-align: right;
`;

export { CustomNavigation, SwiperItemContainer, ImgBox, Description, Title, Price };
