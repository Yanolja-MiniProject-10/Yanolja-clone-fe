import styled from "styled-components";

interface StyledToTopButtonProps {
  $isVisible: boolean;
  $pathBottom: string;
}

const StyledToTopButton = styled.div<StyledToTopButtonProps>`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  border: 0.05rem solid rgba(0, 0, 0, 0.16);
  background: #fff;
  opacity: 0.4;

  position: fixed;
  z-index: 10;
  right: calc(50% - 22rem);
  bottom: ${props => (props.$isVisible ? props.$pathBottom : "-50px")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.md};

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }

  animation: slideInUp 0.8s ease-in-out;

  /* Keyframes for the animation */
  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      bottom: -50px;
    }
    to {
      transform: translateY(0%);
      bottom: ${props => props.$pathBottom};
    }
  }
`;

export default StyledToTopButton;
