import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (width < 750px) {
    gap: 2rem;

    margin-top: 1rem;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 60%;

  @media screen and (width < 750px) {
    padding: 1rem;

    width: 80%;
    min-width: 430px;
  }
`;

export const ChooseRoomText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};

  margin-top: 20px;
`;

export const SkeletonRoomTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonBox = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  gap: 2rem;
  align-items: center;

  padding: 1rem;

  @media screen and (width < 750px) {
    height: 40rem;

    flex-direction: column;
    justify-content: center;
    text-align: center;

    padding: 1rem;
  }
`;

export const SkeletonRoomImgWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (width < 750px) {
    margin: 0 auto;
    justify-content: center;
  }
`;
