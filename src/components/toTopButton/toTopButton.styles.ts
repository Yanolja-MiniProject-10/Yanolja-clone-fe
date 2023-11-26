import styled from "styled-components";

const StyledToTopButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  border-radius: 50%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  border: 0.05rem solid rgba(0, 0, 0, 0.16);
  background: #fff;
  opacity: 0.4;

  position: fixed;
  z-index: 10;
  bottom: 6rem;
  right: calc(50% - 22rem);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.md};

  cursor: pointer;

  transition: 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export default StyledToTopButton;
