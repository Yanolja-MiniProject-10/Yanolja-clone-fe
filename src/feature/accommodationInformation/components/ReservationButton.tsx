import * as style from "../styles/reservationButton";

const ReservationButton = ({
  available,
  onClick,
  text,
  $isWide,
}: {
  available: boolean;
  onClick?: () => void;
  text: string;
  $isWide?: boolean;
}) => {
  return available ? (
    <style.ReservationButton onClick={onClick} $isWide={$isWide}>
      {text}
    </style.ReservationButton>
  ) : (
    <style.DisableReservationButton $isWide={$isWide}>{text}</style.DisableReservationButton>
  );
};

export default ReservationButton;
