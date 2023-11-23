import styled from "styled-components";
import { LuShoppingCart } from "react-icons/lu";

export const EmptyCartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.middleGray};
`;

export const EmptyCartWrapper = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-strong {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .empty-span {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  .empty-home-btn {
    border: 1px solid ${({ theme }) => theme.color.mainPink};
    border-radius: ${({ theme }) => theme.box.radius};
    padding: 12px 70px;

    color: ${({ theme }) => theme.color.mainPink};
    background-color: white;

    transition: 0.5s;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.color.mainPink};
    }
  }
`;
