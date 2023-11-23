import styled from "styled-components";

export const ReservationWrapper = styled.div`
  width: 100%;

  margin: 20px 0;
  padding: 30px;

  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;
