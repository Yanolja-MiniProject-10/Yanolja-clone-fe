import * as style from "../styles/cartButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import { userState } from "../../../recoil/userData";
import { usePostCart } from "../hooks/queries/addCartData";
import { CartButtonProps } from "../accommodationInformation.types";
import { loginModalState } from "../recoil/accommodationLoginModal";
import { cartButtonState } from "../recoil/cartButtonDisabled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartButton = ({
  available,
  roomOptionId,
  numberOfGuest,
  reservationStartDate,
  reservationEndDate,
  stayDuration,
}: CartButtonProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const setToast = useSetRecoilState(toastState);

  const { mutateAsync: postCartMutation } = usePostCart();

  const setLogInModal = useSetRecoilState(loginModalState);

  const cartButtonDisabled = useRecoilValue(cartButtonState);

  const handleAddCart = async () => {
    try {
      await postCartMutation({
        roomOptionId,
        numberOfGuest,
        reservationStartDate,
        reservationEndDate,
        stayDuration,
      });
      setToast({ open: true, message: "장바구니에 상품이 담겼습니다." });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401 || error.response.status === 405) {
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
