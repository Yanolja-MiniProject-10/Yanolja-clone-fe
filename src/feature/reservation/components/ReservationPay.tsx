import { useState } from "react";
import RequirementsPrePay from "./RequirementsPrePay";
import ReservationPayBtn from "./ReservationPayBtn";

const ReservationPay = () => {
  const [allChecked, serAllChecked] = useState(false);

  return (
    <>
      <RequirementsPrePay serAllChecked={serAllChecked} />
      <ReservationPayBtn allChecked={allChecked} />
    </>
  );
};

export default ReservationPay;
