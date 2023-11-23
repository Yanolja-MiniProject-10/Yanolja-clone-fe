import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  border-radius: ${({ theme }) => theme.box.radius};
  background-color: ${({ theme }) => theme.color.white};

  box-shadow: ${({ theme }) => theme.box.shadow};

  width: 350px;

  z-index: 999999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  padding: 2rem;

  animation: slideInUp 0.8s ease-in-out;

  /* Keyframes for the animation */
  @keyframes slideInUp {
    from {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%) translateX(-50%);
      opacity: 1;
    }
  }

  transition: opacity 0.4s ease-in-out;
`;

export const TextWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const LinkToCart = styled(Link)`
  color: ${({ theme }) => theme.color.mainPink};
  text-decoration: none;
`;
