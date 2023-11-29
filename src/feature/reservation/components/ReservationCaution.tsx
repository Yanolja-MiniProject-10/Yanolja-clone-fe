import { CAUTION_CONTENTS } from "../reservation.constants";
import { CautionWrapper, CautionTitle, CautionContents, CautionContent } from "../styles/reservationCaution";
import { GoDotFill } from "react-icons/go";

const ReservationCaution = () => {
  return (
    <CautionWrapper>
      <CautionTitle>예약 전 주의사항</CautionTitle>

      <CautionContents>
        {CAUTION_CONTENTS.map((content, index) => (
          <CautionContent key={index}>
            <GoDotFill size={10} />
            <span>{content}</span>
          </CautionContent>
        ))}
      </CautionContents>
    </CautionWrapper>
  );
};

export default ReservationCaution;
