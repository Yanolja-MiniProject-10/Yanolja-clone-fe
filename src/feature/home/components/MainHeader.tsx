import { useNavigate } from "react-router-dom";
import { Container, LinkedBox, InputText, SearchIcon, CartIcon, CartBadge } from "../styles/mainHeader.ts";
import { LuShoppingCart } from "react-icons/lu";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/userData.ts";
import { useEffect, useState } from "react";
import LoginModal from "../../../components/loginModal/LoginModal.tsx";
import { UserToken } from "../../login/login.types.ts";
import { useFetchCartCount } from "../../cart/hooks/queries/useFetchCartCount.ts";
import getLocalStorage from "../../../util/getLocalStorage.ts";
import axios from "axios";

const MainHeader = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const { accessToken, refreshToken } = getLocalStorage();
  const user: UserToken = {
    accessToken: accessToken || "",
    refreshToken: refreshToken || "",
  };
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const { data: cartData, error, status } = useFetchCartCount(user);

  const [isFirst403Error, setIsFirst403Error] = useState(true);

  useEffect(() => {
    if (status === "error") {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 403 && isFirst403Error) {
          // 첫 번째 403 에러일 때는 무시
          setIsFirst403Error(false);
        } else if (
          error.response.status === 401 ||
          error.response.status === 405 ||
          (error.response.status === 403 && !isFirst403Error)
        ) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          window.alert("인증 오류가 발생했습니다. 로그인을 다시 해주세요.");
          navigate("/login");
        } else {
          window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
          navigate("/");
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigate("/");
      }
    }

    return () => {
      setIsFirst403Error(true);
    };
  }, [error, status, isFirst403Error, setUser]);

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
