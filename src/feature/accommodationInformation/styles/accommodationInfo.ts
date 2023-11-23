import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 840px;
`;

export const AccomodationImg = styled.img`
  max-width: 52.5rem;
  width: 100%;
  max-height: 35rem;
  height: 100%;
`;

export const TextInfo = styled.div`
  padding: 3rem;
`;

export const AccommodationName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const AccommodationAddress = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xs};

  margin: 1rem 0 2rem;
`;

export const DivideLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const AccommodationStaticDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem 0;

  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const StaticDesc = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AccommodationDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.middleGray};
  line-height: 25px;
`;
