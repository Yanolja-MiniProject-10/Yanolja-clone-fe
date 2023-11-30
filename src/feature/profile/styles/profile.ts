import styled from "styled-components";

export const Div = styled.div`
  padding: 4rem 3rem 0 3rem;

  > p {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const MyProfile = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 20px 0 30px 0;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Button = styled.button`
  padding: 0.7rem 1.3rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainPink};
  border: none;
  border-radius: ${({ theme }) => theme.box.radius};

  font-size: ${({ theme }) => theme.fontSize.xs};
  transition: 0.4s;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPink};
    transition: 0.4s;
  }
`;

export const List = styled.div`
  > div {
    padding-bottom: 3.2rem;

    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 300;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.mainPink};
      transition: 0.4s;
    }
  }
`;
