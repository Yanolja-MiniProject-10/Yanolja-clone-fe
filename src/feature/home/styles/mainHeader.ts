import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  height: 60px;
  top: 0;
  width: 100%;
  max-width: 52.5rem;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  * {
    transition: 0.4s;
  }
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
  vertical-align: middle;
`;

const SearchIcon = styled(IoSearch)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: black;
`;

const CartIcon = styled(LuShoppingCart)`
  margin-left: 1rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: black;

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

export { Container, LinkedBox, InputText, SearchIcon, CartIcon };
