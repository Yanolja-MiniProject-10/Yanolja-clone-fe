import { Link } from "react-router-dom";
import { Container, LinkedBox, InputText, SearchIcon, CartIcon, CartBadge } from "../styles/mainHeader.ts";
import { LuShoppingCart } from "react-icons/lu";
import { useFetchCarts } from "../../cart/hooks/queries/useFetchCarts.ts";

const MainHeader = () => {
  const { data: cartData, isLoading, isError } = useFetchCarts();

  console.log("장바구니", cartData?.count);

  return (
    <Container>
      <LinkedBox to="/search">
        <InputText>어디에서 놀까요?</InputText>
        <SearchIcon />
      </LinkedBox>
      <Link to="/cart">
        <CartIcon>
          <LuShoppingCart />
          <CartBadge>
            <p>{cartData?.count}</p>
          </CartBadge>
        </CartIcon>
      </Link>
    </Container>
  );
};

export default MainHeader;
