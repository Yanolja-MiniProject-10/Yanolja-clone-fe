import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Container = styled.div`
  position: sticky;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.color.middleGray};
`;
const Box = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.middleGray};
  width: 90%;
  height: 60%;
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export { Container, Box, InputText, SearchIcon, CartIcon };
