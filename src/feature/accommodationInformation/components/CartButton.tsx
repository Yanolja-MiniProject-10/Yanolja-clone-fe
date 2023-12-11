import * as style from "../styles/cartButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import { userState } from "../../../recoil/userData";
import { usePostCart } from "../hooks/queries/addCartData";
import { CartButtonProps } from "../accommodationInformation.types";
import { loginModalState } from "../recoil/accommodationLoginModal";
import { cartButtonState } from "../recoil/cartButtonDisabled";

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

  const postCartMutation = usePostCart();

  const setLogInModal = useSetRecoilState(loginModalState);

  const cartButtonDisabled = useRecoilValue(cartButtonState);

  const handleAddCart = () => {
    postCartMutation.mutateAsync({
      roomOptionId,
      numberOfGuest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    });
    setToast({ open: true, message: "장바구니에 상품이 담겼습니다." });
  };

  return available ? (
    <style.CartButton onClick={() => !cartButtonDisabled && (user.accessToken ? handleAddCart() : setLogInModal(true))}>
      <style.CartIcon />
    </style.CartButton>
  ) : (
    <style.DisableCartButton>
      <style.DisableCartIcon />
    </style.DisableCartButton>
  );
};

export default CartButton;
