import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 52.5rem; */
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
`;
const LinkedBox = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  width: 90%;
  height: 60%;
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  * {
    color: ${({ theme }) => theme.color.middleGray};
  }
`;
const InputText = styled.p`
  color: ${({ theme }) => theme.color.middleGray};
  vertical-align: middle;
`;

const SearchIcon = styled(IoSearch)`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const CartIcon = styled(LuShoppingCart)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-left: 1rem;
`;

export { Container, LinkedBox, InputText, SearchIcon, CartIcon };
