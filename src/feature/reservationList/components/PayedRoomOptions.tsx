import * as style from "../../../components/roomList/roomList.styles";
import { PayedRoomOptionProps } from "../reservationList.types";

const PayedRoomOptions = ({ roomOption, isCanceled }: PayedRoomOptionProps) => {
  return (
    <style.RoomOptions>
      <style.RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" $isPaymentId={isCanceled} />

      <style.RoomOptionsText>
        <style.RoomOptionsName>{roomOption.name}</style.RoomOptionsName>
        <span>
          {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
        </span>
        <style.RoomOptionsCapacity>{roomOption.numberOfGuest} 인</style.RoomOptionsCapacity>
      </style.RoomOptionsText>

      <style.RoomOptionsPrice>{roomOption.totalPrice.toLocaleString()} 원</style.RoomOptionsPrice>
    </style.RoomOptions>
  );
};

export default PayedRoomOptions;
