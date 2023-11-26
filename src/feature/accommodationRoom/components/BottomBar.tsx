import { useRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/bottomBar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const BottomBar = ({ status, data, error }) => {
  const [, setToast] = useRecoilState(toastState);

  if (status == "pending") {
    return (
      <style.Wrapper>
        <Skeleton height={30} width={200} />
      </style.Wrapper>
    );
  } else if (status == "error") {
    console.log(error.message);
  } else {
    const room = data.data;
    return (
      <style.Wrapper>
        <style.RoomPrice>
          {room.totalPrice.toLocaleString()} 원 / {room.stayDuration}박
        </style.RoomPrice>
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
  }
};

export default BottomBar;
