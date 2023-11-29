import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const NavWrapper = styled.div`
  padding-left: 3rem;
`;

export const SkeletonImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 31rem;
`;

export const AccomodationImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const TextInfo = styled.div`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccommodationName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AccommodationCategory = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const AccommodationAddress = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const DivideLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  width: 100%;
`;

export const AccommodationStaticDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 1rem 0;

  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const StaticDesc = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AccommodationDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.darkGray};
  line-height: 25px;
`;
