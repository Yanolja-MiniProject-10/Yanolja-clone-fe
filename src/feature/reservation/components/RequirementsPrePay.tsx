import { useState } from "react";
import { Checkbox } from "../../../styles/checkbox";
import { DELAY_SETAllCHECKED, REQUIRMENTS } from "../reservation.constants";
import { RequirementsTitle, RequirementsContents, Requirement } from "../styles/requirementsPrePay";
import { ReservationWrapper } from "../styles/reservationWrapper";

const RequirementsPrePay = ({ setAllChecked }: { setAllChecked: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [countChecked, setCountChecked] = useState(0);

  const handleCountChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCountChecked(prev => prev + 1) : setCountChecked(prev => prev - 1);
  };

  setTimeout(() => {
    countChecked === 5 ? setAllChecked(true) : setAllChecked(false);
  }, DELAY_SETAllCHECKED);

  return (
    <ReservationWrapper>
      <RequirementsTitle>결제 전 확인 사항</RequirementsTitle>

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
