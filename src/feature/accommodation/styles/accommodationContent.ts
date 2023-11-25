import styled from "styled-components";

export const AccommodationContentBox = styled.div``;

export const AccommodationContentTitleParagraph = styled.p`
  padding: 1rem 0;

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
`;

export const AccommodationContentGrid = styled.div`
  max-height: 80vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  overflow: scroll;

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

  > div:nth-child(odd) {
    border-right: 1px solid #d9d9d9;
  }

  > div:nth-child(-n + 2) {
    border-top: none;
  }
`;

export const AccommodationContentGridContainer = styled.div`
  width: auto;
  height: 9rem;

  padding: 0.5rem 0.5rem 0.5rem 2rem;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const AccommodationContentGridImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const AccommodationContentGridInnerBox = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 1rem;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const AccommodationContentGridInnerTitle = styled.p`
  padding-bottom: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
`;

export const AccommodationContentGridInnerTag = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.middleGray};
`;

export const AccommodationContentGridInnerParagraph = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 0;

  font-size: ${({ theme }) => theme.fontSize.xs};
`;
