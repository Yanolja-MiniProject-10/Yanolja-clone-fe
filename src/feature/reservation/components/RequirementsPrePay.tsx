import { useState } from "react";
import { Checkbox } from "../../../styles/checkbox";
import { REQUIRMENTS } from "../reservation.constants";
import { RequirementsTitle, RequirementsContents, Requirement } from "../styles/requirementsPrePay";
import { ReservationWrapper } from "../styles/reservationWrapper";

const RequirementsPrePay = ({ serAllChecked }: { serAllChecked: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [countChecked, setCountChecked] = useState(0);

  const handleCountChecked = e => {
    e.target.checked ? setCountChecked(prev => prev + 1) : setCountChecked(prev => prev - 1);
  };

  setTimeout(() => {
    countChecked === 5 ? serAllChecked(true) : serAllChecked(false);
  }, 100);

  return (
    <ReservationWrapper>
      <RequirementsTitle>결제 전 필수 확인 사항</RequirementsTitle>

      <RequirementsContents>
        {REQUIRMENTS.map((requirement, index) => (
          <Requirement key={`requirement-${index}`}>
            <Checkbox>
              <input type="checkbox" id={`requirement-input-${index}`} onChange={handleCountChecked} />
              <label htmlFor={`requirement-input-${index}`}>{requirement}</label>
            </Checkbox>
          </Requirement>
        ))}
      </RequirementsContents>
    </ReservationWrapper>
  );
};

export default RequirementsPrePay;
