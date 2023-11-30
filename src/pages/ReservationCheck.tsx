import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateTransportation } from "../feature/reservationCheck/reservationCheck.util";
import { ReservationCheckData } from "../feature/reservationCheck/reservationCheck.types";
import { Loading, LoadingWrapper } from "../styles/loading";
import * as cartStyle from "../feature/cart/styles/cartRoom";
import * as reserStyle from "../feature/reservation/styles/reservationRooms";
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
            <cartStyle.Accommodation>
              <cartStyle.AccommodationName>{accommodation.name}</cartStyle.AccommodationName>
              <cartStyle.AccommodationAddress>{accommodation.address}</cartStyle.AccommodationAddress>
            </cartStyle.Accommodation>

            {accommodation.roomOptions.map(roomOption => (
              <div key={`room-option-${roomOption.cartProductId}`}>
                <reserStyle.RoomOptions>
                  <reserStyle.RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" />

                  <reserStyle.RoomOptionsText>
                    <reserStyle.RoomOptionsName>{roomOption.name}</reserStyle.RoomOptionsName>
                    <span>
                      {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
                    </span>
                    <reserStyle.RoomOptionsCapacity>{roomOption.capacity} 인</reserStyle.RoomOptionsCapacity>
                  </reserStyle.RoomOptionsText>

                  <reserStyle.RoomOptionsPrice>
                    {(roomOption.pricePerNight * roomOption.stayDuration).toLocaleString()} 원
                  </reserStyle.RoomOptionsPrice>
                </reserStyle.RoomOptions>

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
