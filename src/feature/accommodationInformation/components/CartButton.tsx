import { useNavigate } from "react-router-dom";
import * as style from "../styles/cartButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import { userState } from "../../../recoil/userData";
import { usePostCart } from "../hooks/queries/addCartData";
import { CartButtonProps } from "../accommodationInformation.types";
import { loginModalState } from "../recoil/accommodationLoginModal";
import { useState } from "react";

const CartButton = ({
  available,
  roomOptionId,
  numberOfGuest,
  reservationStartDate,
  reservationEndDate,
  stayDuration,
}: CartButtonProps) => {
  const user = useRecoilValue(userState);

  const setToast = useSetRecoilState(toastState);

  const navigation = useNavigate();

  const postCartMutation = usePostCart();

  const setLogInModal = useSetRecoilState(loginModalState);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddCart = () => {
    try {
      setIsButtonDisabled(true);
      postCartMutation.mutateAsync({
        roomOptionId,
        numberOfGuest,
        reservationStartDate,
        reservationEndDate,
        stayDuration,
      });
      setToast({ open: true, message: "장바구니에 상품이 담겼습니다." });
      setTimeout(() => setIsButtonDisabled(false), 3000);
    } catch (e) {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
    }
  };

  return available ? (
    <style.CartButton onClick={() => !isButtonDisabled && (user.accessToken ? handleAddCart() : setLogInModal(true))}>
      <style.CartIcon />
    </style.CartButton>
  ) : (
    <style.DisableCartButton>
      <style.DisableCartIcon />
    </style.DisableCartButton>
  );
};

export default CartButton;
