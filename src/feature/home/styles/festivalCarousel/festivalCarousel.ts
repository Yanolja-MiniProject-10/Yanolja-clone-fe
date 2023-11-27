import styled from "styled-components";

const BannerContainer = styled.div`
  width: 19rem;
  height: 9rem;
`;

const BackgroundImg = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.box.radius};

  &:after {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.p`
  z-index: 100;
  white-space: pre-line;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.white};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`;

const ColorTitleBox = styled.div`
  position: absolute;
  left: -10px;
  top: -1px;

  width: 80%;
  height: 101%;
  padding: 0 2rem 0 1rem;

  border-radius: 10px 0 0 10px;
  background-color: #d4e4e7;

  display: flex;
  align-items: center;

  clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
`;

export { BannerContainer, BackgroundImg, ColorTitleBox, Title };
