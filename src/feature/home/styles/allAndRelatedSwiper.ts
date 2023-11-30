import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleAndLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkToOthers = styled(Link)`
  margin-top: 10px;

  color: ${({ theme }) => theme.color.mainPink} !important;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.color.hoverPink};
  }
`;

//Item style
const SwiperItemContainer = styled.div`
  width: 12rem;
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

  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Title = styled.b`
  margin-bottom: 1rem;
`;

const Price = styled.p`
  text-align: right;
`;

export { TitleAndLinkBox, LinkToOthers, SwiperItemContainer, ImgBox, Description, Title, Price };
