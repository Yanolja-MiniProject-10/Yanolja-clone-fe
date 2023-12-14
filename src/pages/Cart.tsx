import { useNavigate } from "react-router-dom";
import { useFetchCarts } from "../feature/cart/hooks/queries/useFetchCarts";
import SelectCartList from "../feature/cart/components/SelectCartList";
import TotalSelectedPrice from "../feature/cart/components/TotalSelectedPrice";
import CartPay from "../feature/cart/components/CartPay";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as style from "../feature/cart/styles/cart";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/userData";

const Cart = () => {
  const setUser = useSetRecoilState(userState);

  const { data: cartData, isLoading, status, error } = useFetchCarts();
  const navigation = useNavigate();

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
          navigation("/login");
        } else {
          window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
          navigation("/");
        }
      } else {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigation("/");
      }
    }

    return () => {
      setIsFirst403Error(true);
    };
  }, [error, status, isFirst403Error, setUser]);

  return !isLoading && cartData ? (
    <style.CartWrapper>
      <SelectCartList accommodations={cartData.accommodations} />
      <TotalSelectedPrice />
      <CartPay cartId={cartData.cartId} />
    </style.CartWrapper>
  ) : (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};

export default Cart;
