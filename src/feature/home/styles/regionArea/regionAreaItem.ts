import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled(Link)`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  transition: 0.4s;
  &:hover {
    opacity: 70%;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 8rem;

  & > img {
    width: 100%;

    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }

  @media screen and (width < 750px) {
    width: 100%;
    height: 9rem;

    object-fit: cover;
  }
`;

const Description = styled.div`
  padding: 10px 5px;

  display: flex;
  flex-direction: column;

  white-space: nowrap;

  * {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Title = styled.b`
  margin-bottom: 13px;
`;

const Price = styled.p``;

export { ItemContainer, ImgBox, Description, Title, Price };
