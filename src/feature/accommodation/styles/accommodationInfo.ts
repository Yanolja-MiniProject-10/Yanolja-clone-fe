import styled from "styled-components";

export const AccommodationInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (width < 520px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width < 340px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AccommodationInfoCalenderBox = styled.div`
  height: 2rem;

  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.mainPink};
  cursor: pointer;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const AccommodationInfoCalenderParagraph = styled.p`
  width: 100%;

  padding-left: 0.5rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
`;
export const AccommodationInfoMemberBox = styled.div`
  height: 2rem;

  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.mainPink};
  cursor: pointer;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const AccommodationInfoMemberParagraph = styled.p`
  width: 100%;

  padding-left: 0.5rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
`;

export const AccommodationInfoRegionBox = styled.div`
  height: 2rem;

  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.mainPink};
`;

export const AccommodationInfoRegionSelect = styled.select`
  padding: 0 0.5rem;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;

  color: ${({ theme }) => theme.color.mainPink};
  &:focus {
    outline: none;
  }
`;
