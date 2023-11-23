import { useRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/bottomBar";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [, setToast] = useRecoilState(toastState);

  return (
    <style.Wrapper>
      {/* 가격 하드코딩 */}
      <style.RoomPrice>250,000 원</style.RoomPrice>
      <style.ButtonWrapper>
        <style.CartButton onClick={() => setToast({ open: true, message: "장바구니에 상품이 담겼습니다." })}>
          <style.CartIcon />
        </style.CartButton>
        <Link to="/reservation">
          <style.ReservationButton>예약하기</style.ReservationButton>
        </Link>
      </style.ButtonWrapper>
    </style.Wrapper>
  );
};

export default BottomBar;
