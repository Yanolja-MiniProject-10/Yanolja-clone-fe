import { useRecoilState, useRecoilValue } from "recoil";
import * as style from "../styles/bottomBar";
import Skeleton from "react-loading-skeleton";
import { RoomInfoProps } from "../RoomInformation.types";
import { accommodationMemberState } from "../../../recoil/accommodation/accommodationMember";
import { accommodationDateState } from "../../../recoil/accommodation/accommodationDate";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import { postReservation } from "../../accommodationInformation/api";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../recoil/userData";
import LoginModal from "../../../components/loginModal/LoginModal";
import CartButton from "../../accommodationInformation/components/CartButton";
import ReservationButton from "../../accommodationInformation/components/ReservationButton";
import { loginModalState } from "../../accommodationInformation/recoil/accommodationLoginModal";

const BottomBar = ({ status, data }: RoomInfoProps) => {
  const user = useRecoilValue(userState);

  const [logInModal, setLogInModal] = useRecoilState(loginModalState);

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  const navigation = useNavigate();

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  if (status == "pending") {
    return (
      <style.Wrapper>
        <style.SkeletonTextWrapper>
          <Skeleton height={15} width={160} />
          <Skeleton height={20} width={100} />
          <Skeleton height={30} width={200} />
        </style.SkeletonTextWrapper>
      </style.Wrapper>
    );
  } else if (status == "error") {
    window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
    navigation("/");
  } else {
    const room = data.data;
    const availableRoomCount = room.totalRoomCount - room.reservedRoomCount;
    const isRoomAvailable = availableRoomCount > 0;
    const isAvailableGuest = guest <= room.capacity;

    const postReservationInstant = async () => {
      try {
        const data = await postReservation(room.id, guest, reservationStartDate, reservationEndDate, room.stayDuration);
        const cartId = data.data.cartId;
        const cartProducts = [data.data.accommodations[0].roomOptions[0].cartProductId];

        navigation("/reservation", {
          state: {
            cartId,
            cartProducts,
          },
        });
      } catch (e) {
        window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
        navigation("/");
      }
    };

    return (
      <>
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
                  // onClick={() => {
                  //   user.accessToken ? postReservationInstant() : setIsLoginModal(true);
                  // }}
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
                <ReservationButton available={false} text="예약불가" $isWide={true} />
              </>
            )}
          </style.ButtonWrapper>
        </style.Wrapper>

        {logInModal && <LoginModal onClose={() => setLogInModal(false)} />}
      </>
    );
  }
};

export default BottomBar;
