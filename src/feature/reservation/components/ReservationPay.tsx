import { useState } from "react";
import RequirementsPrePay from "./RequirementsPrePay";
import ReservationPayBtn from "./ReservationPayBtn";

const ReservationPay = () => {
  const [allChecked, setAllChecked] = useState(false);

  return (
    <>
      <RequirementsPrePay setAllChecked={setAllChecked} />
      <ReservationPayBtn allChecked={allChecked} />
    </>
  );
};

export default ReservationPay;
