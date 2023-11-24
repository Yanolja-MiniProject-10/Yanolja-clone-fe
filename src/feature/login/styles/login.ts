import styled from "styled-components";

// export const LoginMessage = styled(Message)`
//   padding: 10px 0;
// `;

export const LinkWrapper = styled.div`
  margin-right: 34px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xs};

  span:nth-of-type(2) {
    padding: 0 20px;
  }

  span:not(:nth-of-type(2)) {
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
      transition: 0.4s;
    }
  }
`;
