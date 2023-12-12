import { useRecoilValue } from "recoil";
import * as common from "../../cart/styles/cartRoom";
import * as style from "../styles/reservationRooms";
import { paymentDataState } from "../recoil/paymentData";
import { CartData } from "../../../types";
import TransportationRadio from "./TransportationRadio";

const ReservationRooms = () => {
  const paymentData: CartData = useRecoilValue(paymentDataState);

  return JSON.stringify(paymentData) === "{}" ? null : (
    <div>
      {paymentData.accommodations.map(accommodation => (
        <common.AccommodationList key={`accommodation-list-${accommodation.accommodationId}`}>
          <common.Accommodation href={"/accommodation/" + accommodation.accommodationId}>
            <common.AccommodationName>{accommodation.name}</common.AccommodationName>
            <common.AccommodationAddress>{accommodation.address}</common.AccommodationAddress>
          </common.Accommodation>

          {accommodation.roomOptions.map(roomOption => (
            <div key={`room-option-${roomOption.cartProductId}`}>
              <style.RoomOptions>
                <style.RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" />

                <style.RoomOptionsText>
                  <style.RoomOptionsName>{roomOption.name}</style.RoomOptionsName>
                  <span>
                    {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
                  </span>
                  <style.RoomOptionsCapacity>{roomOption.capacity} 인</style.RoomOptionsCapacity>
                </style.RoomOptionsText>

                <style.RoomOptionsPrice>
                  {(roomOption.pricePerNight * roomOption.stayDuration).toLocaleString()} 원
                </style.RoomOptionsPrice>
              </style.RoomOptions>

              <TransportationRadio roomOption={roomOption} />
            </div>
          ))}
        </common.AccommodationList>
      ))}
    </div>
  );
};

export default ReservationRooms;
