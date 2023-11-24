import styled from "styled-components";

const HomeInnerContainer = styled.div`
  margin-bottom: 4rem;

  * {
    --swiper-navigation-color: ${({ theme }) => theme.color.middleGray};
  }
`;

const Title = styled.p`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`;

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 60px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const ToTopButton = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  border: 0.05rem solid rgba(0, 0, 0, 0.16);
  background: #fff;
  opacity: 0.4;

  position: fixed;
  z-index: 10;
  bottom: 6rem;
  right: calc(50% - 25rem);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.md};

  cursor: pointer;
`;

export { HomeInnerContainer, Title, HomeContainer, ToTopButton };
