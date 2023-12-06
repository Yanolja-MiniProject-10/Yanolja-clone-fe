import { useRecoilValue, useSetRecoilState } from "recoil";
import { postReservation } from "../api";
import * as style from "../styles/reservationButton";
import { userState } from "../../../recoil/userData";
import { loginModalState } from "../recoil/accommodationLoginModal";
import { useNavigate } from "react-router-dom";
import { ReservationButtonProps } from "../accommodationInformation.types";

const ReservationButton = ({
  available,
  id,
  guest,
  reservationEndDate,
  reservationStartDate,
  stayDuration,
  text,
  $isWide,
}: ReservationButtonProps) => {
  const user = useRecoilValue(userState);
  const setLogInModal = useSetRecoilState(loginModalState);

  const navigation = useNavigate();

  const postReservationInstant = async () => {
    try {
      const data = await postReservation(id, guest, reservationStartDate, reservationEndDate, stayDuration);
      const cartId = data.data.cartId;
      const cartProducts = [data.data.accommodations[0].roomOptions[0].cartProductId];

      navigation("/reservation", {
        state: {
          cartId,
          cartProducts,
        },
      });
    } catch (e) {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
    }
  };

  return available ? (
    <style.ReservationButton
      onClick={() => {
        user.accessToken ? postReservationInstant() : setLogInModal(true);
      }}
      $isWide={$isWide}
    >
      {text}
    </style.ReservationButton>
  ) : (
    <style.DisableReservationButton $isWide={$isWide}>{text}</style.DisableReservationButton>
  );
};

export default ReservationButton;
