import { CAUTION_CONTENTS } from "../reservation.constants";
import { GoDotFill } from "react-icons/go";
import { CautionWrapper, CautionTitle, CautionContents, CautionContent } from "../styles/reservationCaution";

const ReservationCaution = () => {
  return (
    <CautionWrapper>
      <CautionTitle>예약 전 주의사항</CautionTitle>

      <CautionContents>
        {CAUTION_CONTENTS.map((content, index) => (
          <CautionContent key={index}>
            <GoDotFill size={10} />
            <span>{content}</span>
            <br />
          </CautionContent>
        ))}
      </CautionContents>
    </CautionWrapper>
  );
};

export default ReservationCaution;
