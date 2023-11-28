import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const AccommodationSearchInputBox = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;

  padding: 0.4rem 0rem;
  border: 1px solid #d9d9d9;
  border-radius: ${({ theme }) => theme.box.radius};
`;

export const AccommodationSearchIcon = styled(IoSearch)`
  width: 1.5rem;
  height: 1.5rem;

  margin-left: 1rem;
`;

export const AccommodationSearchInput = styled.input`
  width: auto;

  flex: auto;

  padding-left: 0.7rem;
  border: none;

  &:focus {
    outline: none;
  }
`;
