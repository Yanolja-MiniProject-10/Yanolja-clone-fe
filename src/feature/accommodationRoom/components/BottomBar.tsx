import { useRecoilState, useRecoilValue } from "recoil";
import * as style from "../styles/bottomBar";
import { RoomInfoProps } from "../RoomInformation.types";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import LoginModal from "../../../components/loginModal/LoginModal";
import CartButton from "../../accommodationInformation/components/CartButton";
import ReservationButton from "../../accommodationInformation/components/ReservationButton";
import { loginModalState } from "../../accommodationInformation/recoil/accommodationLoginModal";
import { useMemo } from "react";

const BottomBar = ({ data }: RoomInfoProps) => {
  const [logInModal, setLogInModal] = useRecoilState(loginModalState);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  const room = data.data;
  const availableRoomCount = useMemo(() => room.totalRoomCount - room.reservedRoomCount, [room]);
  const isRoomAvailable = useMemo(() => availableRoomCount > 0, [availableRoomCount]);
  const isAvailableGuest = useMemo(() => guest <= room.capacity, [guest, room.capacity]);

  return (
    <style.Wrapper>
      <style.TopWrapper>
        <style.ReservationDate>
          {reservationStartDate} ~ {reservationEndDate}
        </style.ReservationDate>
        <style.ReservationGuest> 선택 인원: {guest}인</style.ReservationGuest>
        <style.RoomPrice>
          {room.totalPrice.toLocaleString()}원 / {room.stayDuration}박
        </style.RoomPrice>
      </style.TopWrapper>
      <style.ButtonWrapper>
        {isRoomAvailable && isAvailableGuest ? (
          <>
            <CartButton
              roomOptionId={room.id}
              numberOfGuest={guest}
              reservationStartDate={reservationStartDate}
              reservationEndDate={reservationEndDate}
              stayDuration={room.stayDuration}
              available={true}
            />
            <ReservationButton
              id={room.id}
              guest={guest}
              reservationStartDate={reservationStartDate}
              reservationEndDate={reservationEndDate}
              stayDuration={room.stayDuration}
              available={true}
              text="예약하기"
              $isWide={true}
            />
          </>
        ) : (
          <>
            <CartButton
              roomOptionId={room.id}
              numberOfGuest={guest}
              reservationStartDate={reservationStartDate}
              reservationEndDate={reservationEndDate}
              stayDuration={room.stayDuration}
              available={false}
            />
            <ReservationButton
              id={room.id}
              guest={guest}
              reservationStartDate={reservationStartDate}
              reservationEndDate={reservationEndDate}
              stayDuration={room.stayDuration}
              available={false}
              text="예약불가"
              $isWide={true}
            />
          </>
        )}
      </style.ButtonWrapper>
      {logInModal && <LoginModal onClose={() => setLogInModal(false)} />}
    </style.Wrapper>
  );
};

export default BottomBar;
