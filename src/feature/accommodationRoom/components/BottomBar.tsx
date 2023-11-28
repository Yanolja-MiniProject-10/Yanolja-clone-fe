import { useRecoilState, useRecoilValue } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/bottomBar";
import Skeleton from "react-loading-skeleton";
import { RoomInfoProps } from "../RoomInformation.types";
import { useQueryClient } from "@tanstack/react-query";
import { usePostCart } from "../../accommodationInformation/hooks/queries/addCartData";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import { postReservation } from "../../accommodationInformation/api";
import { useNavigate } from "react-router-dom";

const BottomBar = ({ status, data }: RoomInfoProps) => {
  const [, setToast] = useRecoilState(toastState);

  const queryClient = useQueryClient();
  const { mutateAsync: postCart } = usePostCart(queryClient);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  const navigation = useNavigate();

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
    const availableRoomCount = room.totalRoomCount - room.reservedRoomCount;
    const isRoomAvailable = availableRoomCount > 0;

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

    const postReservationInstant = async () => {
      try {
        const data = await postReservation(room.id, guest, reservationStartDate, reservationEndDate, room.stayDuration);
        const cartId = data.data.cartId;
        const cartProducts = [data.data.accommodations[0].roomOptions[0].cartProductId];

        navigation("/reservation", {
          state: {
            cartId,
            cartProducts,
          },
        });
      } catch (e) {
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
            {room.totalPrice.toLocaleString()}원 / {room.stayDuration}박
          </style.RoomPrice>
        </style.TopWrapper>
        <style.ButtonWrapper>
          {isRoomAvailable ? (
            <>
              <style.CartButton onClick={() => handleAddCart()}>
                <style.CartIcon />
              </style.CartButton>
              <style.ReservationButton onClick={() => postReservationInstant()}>예약하기</style.ReservationButton>
            </>
          ) : (
            <>
              <style.DisableCartButton>
                <style.DisableCartIcon />
              </style.DisableCartButton>
              <style.DisableReservationButton>예약마감</style.DisableReservationButton>
            </>
          )}
        </style.ButtonWrapper>
      </style.Wrapper>
    );
  }
};

export default BottomBar;
