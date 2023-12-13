import { Link } from "react-router-dom";
import styled from "styled-components";

export const AccommodationContentBox = styled.div`
  & .infinite-scroll-component__outerdiv {
    height: 85vh;
    max-height: 85vh;
  }

  * > {
    &::-webkit-scrollbar {
      width: 8px;
      display: none;
      overflow-y: scroll;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }
`;

export const AccommodationContentTitleParagraph = styled.p`
  padding: 1rem 0;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const AccommodationContentLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const AccommodationContentGrid = styled.div`
  max-height: 85vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  overflow: scroll;

  > a:nth-child(even) > div {
    border-right: none;
  }

  @media screen and (width < 750px) {
    grid-template-columns: repeat(1, 1fr);
    > a > div {
      border-right: none;
    }
  }
  @media screen and (width < 400px) {
    display: flex;
    flex-direction: column;
    > a > div {
      border-right: none;
    }
  }
`;

export const AccommodationContentGridContainer = styled.div`
  width: auto;
  height: 9rem;

  padding: 1rem 1rem 1rem 2rem;

  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: 0.4s;
  }

  @media screen and (width < 400px) {
    flex-direction: column;
    margin-bottom: 1rem;
    > img {
      width: 100%;
      height: 50%;
    }
  }
`;

export const AccommodationContentGridImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
`;

export const AccommodationContentGridInnerBox = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  @media screen and (width < 400px) {
    padding: 0;

    > div:nth-child(2) {
      position: relative;
      margin-bottom: 1rem;
      margin-left: auto;
      bottom: 1.25rem;
    }
  }
`;

export const AccommodationContentGridInnerTitle = styled.p`
  padding-bottom: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
`;

export const AccommodationContentGridInnerTag = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.middleGray};
`;

export const AccommodationContentGridInnerPriceBox = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0;
`;

export const AccommodationContentGridInnerParagraph = styled.p`
  padding-top: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const AccommodationContentNotExists = styled.div`
  width: 675px;
  min-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.color.darkGray};
  }
`;
