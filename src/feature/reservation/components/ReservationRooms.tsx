import { useRecoilValue } from "recoil";
import { paymentDataState } from "../recoil/paymentData";
import RoomList from "../../../components/roomList/RoomList";
import TransportationRadio from "./TransportationRadio";
import { CartData } from "../../../types";
import * as common from "../../cart/styles/cartRoom";

const ReservationRooms = () => {
  const paymentData: CartData = useRecoilValue(paymentDataState);

  return JSON.stringify(paymentData) === "{}" ? null : (
    <>
      {paymentData.accommodations.map(accommodation => (
        <common.AccommodationList key={`accommodation-list-${accommodation.accommodationId}`}>
          <common.Accommodation href={"/accommodation/" + accommodation.accommodationId}>
            <common.AccommodationName>{accommodation.name}</common.AccommodationName>
            <common.AccommodationAddress>{accommodation.address}</common.AccommodationAddress>
          </common.Accommodation>

          {accommodation.roomOptions.map(roomOption => (
            <div key={`room-option-${roomOption.cartProductId}`}>
              <RoomList roomOption={roomOption} />
              <TransportationRadio roomOption={roomOption} />
            </div>
          ))}
        </common.AccommodationList>
      ))}
    </>
  );
};

export default ReservationRooms;
