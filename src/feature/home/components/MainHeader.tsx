import { useNavigate } from "react-router-dom";
import { Container, LinkedBox, InputText, SearchIcon, CartIcon, CartBadge } from "../styles/mainHeader.ts";
import { LuShoppingCart } from "react-icons/lu";
import { useFetchCarts } from "../../cart/hooks/queries/useFetchCarts.ts";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/userData.ts";
import { useState } from "react";
import LoginModal from "../../../components/loginModal/LoginModal.tsx";

const MainHeader = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const { data: cartData } = useFetchCarts();

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  return (
    <>
      <Container>
        <LinkedBox to="/search">
          <InputText>어디에서 놀까요?</InputText>
          <SearchIcon />
        </LinkedBox>
        <div
          onClick={() => {
            user.accessToken ? navigate("/cart") : setIsLoginModal(true);
          }}
        >
          <CartIcon>
            <LuShoppingCart />
            {cartData?.count !== 0 && user.accessToken && (
              <CartBadge>
                <p>{cartData?.count}</p>
              </CartBadge>
            )}
          </CartIcon>
        </div>
      </Container>

      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default MainHeader;
