import { useRecoilState, useRecoilValue } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/bottomBar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { RoomInfoProps } from "../RoomInformation.types";
import { useQueryClient } from "@tanstack/react-query";
import { usePostCart } from "../../accommodationInformation/hooks/queries/addCartData";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";

const BottomBar = ({ status, data }: RoomInfoProps) => {
  const [, setToast] = useRecoilState(toastState);

  const queryClient = useQueryClient();
  const { mutateAsync: postCart } = usePostCart(queryClient);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  /**나중에 로직 수정 예정 */
  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  if (status == "pending") {
    return (
      <style.Wrapper>
        <Skeleton height={30} width={200} />
      </style.Wrapper>
    );
  } else if (status == "error") {
    return null;
  } else {
    const room = data.data;

    const handleAddCart = async () => {
      try {
        await postCart({
          roomOptionId: room.id,
          numberOfGuest: guest,
          reservationStartDate,
          reservationEndDate,
          stayDuration: room.stayDuration,
        });
        setToast({ open: true, message: "장바구니에 상품이 담겼습니다." });
      } catch (e) {
        alert(`장바구니에 상품 담기를 실패했습니다.`);
        console.log(e);
      }
    };

    return (
      <style.Wrapper>
        <style.TopWrapper>
          <style.ReservationInfoText>
            {reservationStartDate} ~ {reservationEndDate}
            <style.ReservationGuest> ({guest}인)</style.ReservationGuest>
          </style.ReservationInfoText>
          <style.RoomPrice>
            {room.totalPrice.toLocaleString()} 원 / {room.stayDuration}박
          </style.RoomPrice>
        </style.TopWrapper>
        <style.ButtonWrapper>
          <style.CartButton
            onClick={() => {
              handleAddCart();
            }}
          >
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
