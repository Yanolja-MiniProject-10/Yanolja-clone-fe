import { PayBtn } from "../styles/reservationPayBtn";

const ReservationPayBtn = ({ allChecked }: { allChecked: boolean }) => {
  return (
    <PayBtn
      $allChecked={allChecked}
      onClick={
        allChecked
          ? () => {
              console.log("결제하기 API");
            }
          : undefined
      }
    >
      결제하기
    </PayBtn>
  );
};

export default ReservationPayBtn;
