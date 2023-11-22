import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  width: 100%;
  max-width: 52.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;
const LinkedBox = styled(Link)`
  cursor: pointer;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  width: 90%;
  height: 60%;
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
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
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: black;
  margin-left: 1rem;
  &:hover {
    color: ${({ theme }) => theme.color.hoverPink};
  }
`;

export { Container, LinkedBox, InputText, SearchIcon, CartIcon };
