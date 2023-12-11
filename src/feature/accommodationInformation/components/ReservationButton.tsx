import { useRecoilValue, useSetRecoilState } from "recoil";
import * as style from "../styles/reservationButton";
import { userState } from "../../../recoil/userData";
import { loginModalState } from "../recoil/accommodationLoginModal";
import { ReservationButtonProps } from "../accommodationInformation.types";
import { usePostSingleReservation } from "../hooks/queries/addSingleReservationData";

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

  const postSingleReservationMutation = usePostSingleReservation();

  const postReservationInstant = () => {
    postSingleReservationMutation.mutate({
      roomOptionId: id,
      numberOfGuest: guest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    });
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
