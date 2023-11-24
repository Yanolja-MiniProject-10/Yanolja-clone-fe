import styled from "styled-components";

export const AccommodationInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const AccommodationInfoCalenderBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const AccommodationInfoCalenderParagraph = styled.p`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding-left: 0.5rem;
`;
export const AccommodationInfoMemberBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: ${({ theme }) => theme.box.radius};

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const AccommodationInfoMemberParagraph = styled.p`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding-left: 0.5rem;
`;

export const AccommodationInfoRegionBox = styled.div`
  display: flex;
  align-items: center;
  color: #e7497a;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #e7497a;
  border-radius: 10px;
`;

export const AccommodationInfoRegionSelect = styled.select`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  padding: 0 0.5rem;
`;
