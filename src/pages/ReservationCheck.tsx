import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RoomList from "../components/roomList/RoomList";
import { updateTransportation } from "../feature/reservationCheck/reservationCheck.util";
import { ReservationCheckData } from "../feature/reservationCheck/reservationCheck.types";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as cartStyle from "../feature/cart/styles/cartRoom";
import * as style from "../feature/reservationCheck/styles/reservationCheck";

const ReservationCheck = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const reservationCheckData: ReservationCheckData = { ...location.state };
  const chekPayment = reservationCheckData.paymentData;
  const radioData = reservationCheckData.radioDataArray;
  const newCartData = updateTransportation(chekPayment, radioData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    loadingTimer;

    return () => clearInterval(loadingTimer);
  }, []);

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.ReservationChecktWrapper>
      <style.ChekPaymentWrapper>
        <style.ChekPaymentContents>
          <style.Airplane />
          <style.ChekPaymentTitle>예약이 완료되었습니다.</style.ChekPaymentTitle>
          <style.ChekPaymentBtn onClick={() => navigation("/reservation-list")}>
            예약 내역 확인하기
          </style.ChekPaymentBtn>
        </style.ChekPaymentContents>

        {newCartData.accommodations.map(accommodation => (
          <cartStyle.AccommodationList key={`accommodation-list-${accommodation.accommodationId}`}>
            <cartStyle.Accommodation href={"/accommodation/" + accommodation.accommodationId}>
              <cartStyle.AccommodationName>{accommodation.name}</cartStyle.AccommodationName>
              <cartStyle.AccommodationAddress>{accommodation.address}</cartStyle.AccommodationAddress>
            </cartStyle.Accommodation>

            {accommodation.roomOptions.map(roomOption => (
              <div key={`room-option-${roomOption.cartProductId}`}>
                <RoomList roomOption={roomOption} />

                <style.RoomOptionsTrans>
                  <span>방문 수단</span>
                  <span>{roomOption.transportation}</span>
                </style.RoomOptionsTrans>
              </div>
            ))}
          </cartStyle.AccommodationList>
        ))}
      </style.ChekPaymentWrapper>
    </style.ReservationChecktWrapper>
  );
};

export default ReservationCheck;
