import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  height: 120px;
  width: 100%;

  z-index: 1;

  max-width: 750px;

  bottom: 1px;

  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: flex-end;
  gap: 1rem;

  padding: 1.5rem 3rem;

  border-top: 1px solid ${({ theme }) => theme.color.middleGray};
`;

export const SkeletonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;
`;

export const ReservationDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.darkGray};

  margin-bottom: 0.3rem;
`;

export const ReservationGuest = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.black};
`;

export const RoomPrice = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
