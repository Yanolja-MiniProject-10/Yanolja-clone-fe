import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 95;

  height: 50px;
  width: 100%;
  max-width: 750px;

  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkedBox = styled(Link)`
  width: 90%;
  height: 70%;
  padding: 0 1.8rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.middleGray};

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
  cursor: pointer;
`;

const InputText = styled.p`
  color: ${({ theme }) => theme.color.middleGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  vertical-align: middle;
`;

const SearchIcon = styled(IoSearch)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: black;
`;

const CartIcon = styled.div`
  position: relative;

  margin-left: 1rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: black;

  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

const CartBadge = styled.div`
  position: absolute;
  top: -3px;
  right: -6px;
  z-index: 100;
  border-radius: 50%;
  width: 12px;
  height: 12px;

  background-color: ${({ theme }) => theme.color.mainPink};

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  * {
    font-size: 10px;
  }

  color: white;
`;

export { Container, LinkedBox, InputText, SearchIcon, CartIcon, CartBadge };
