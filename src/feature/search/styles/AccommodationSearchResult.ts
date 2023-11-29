import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";

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
  width: 1rem;
  height: 1rem;

  margin-left: 1rem;
`;

export const AccommodationSearchCloseIcon = styled(IoClose)`
  width: 1rem;
  height: 1rem;

  margin-right: 1rem;

  cursor: pointer;
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
