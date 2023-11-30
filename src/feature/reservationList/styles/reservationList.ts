import styled from "styled-components";

export const ReservationListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 30px 0;
`;

export const PayedRoomsWrapper = styled.div`
  width: 100%;

  padding: 40px;

  border-radius: ${({ theme }) => theme.box.radius};

  box-shadow: ${({ theme }) => theme.box.shadow};
  background-color: white;
`;
