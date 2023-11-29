import styled from "styled-components";

const BannerContainer = styled.div`
  width: 19rem;
  height: 9rem;

  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.box.shadow};
  }
`;

const BackgroundImg = styled.div<{ $backImage: string }>`
  width: 100%;
  height: 100%;
  padding: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  border-radius: 5px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props => props.$backImage});
`;

const Title = styled.p`
  white-space: pre-wrap;
  line-height: 1.2;

  text-align: center;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.white};

  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`;

export { BannerContainer, BackgroundImg, Title };
