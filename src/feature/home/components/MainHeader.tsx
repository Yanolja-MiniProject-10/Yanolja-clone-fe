import { useNavigate } from "react-router-dom";
import { Container, LinkedBox, InputText, SearchIcon, CartIcon, CartBadge } from "../styles/mainHeader.ts";
import { LuShoppingCart } from "react-icons/lu";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/userData.ts";
import { useState } from "react";
import LoginModal from "../../../components/loginModal/LoginModal.tsx";
import { UserToken } from "../../login/login.types.ts";
import { useFetchCartCount } from "../../cart/hooks/queries/useFetchCartCount.ts";

const MainHeader = () => {
  const navigate = useNavigate();
  const user: UserToken = useRecoilValue(userState);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const { data: cartData, status } = useFetchCartCount(user);

  if (status === "error") {
    window.alert("잘못된 접근입니다. 다시 시도해 주세요.");
  }

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
