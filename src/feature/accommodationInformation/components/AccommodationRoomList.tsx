import AccommodationRoomItem from "./AccommodationRoomItem";
import { useParams, useNavigate } from "react-router-dom";
import * as style from "../styles/accommodationRoomList";
import { useAccommodationInfoQuery } from "../hooks/queries/fetchData";
import { RoomListProps } from "../accommodationInformation.types";
import { accommodationDateState } from "../../../recoil/accommodationDate";
import { useRecoilValue } from "recoil";
import { handleDateParam } from "../../accommodation/accommodation.utils";
import { accommodationMemberState } from "../../../recoil/accommodationMember";
import { useEffect } from "react";
import AccommodationRoomListSkeleton from "./AccommodationRoomListSkeleton";

const AccommodationRoomList = () => {
  const { accommodationId } = useParams();
  const navigation = useNavigate();

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  const { status, data } = useAccommodationInfoQuery({
    id: accommodationId,
    reservationStartDate,
    reservationEndDate,
    member: guest,
  });

  useEffect(() => {
    if (status === "error") {
      window.alert("사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.");
      navigation("/");
      return () => {
        null;
      };
    }
  }, [navigation, status]);

  return status === "pending" ? (
    <AccommodationRoomListSkeleton />
  ) : (
    <style.Wrapper>
      <style.ChooseRoomText>객실 선택</style.ChooseRoomText>
      {data.data.roomOptions.map((room: RoomListProps) => (
        <AccommodationRoomItem
          key={room.id}
          id={room.id}
          accommodationId={accommodationId}
          name={room.name}
          roomOptionImage={room.roomOptionImage}
          checkInTime={room.checkInTime}
          checkOutTime={room.checkOutTime}
          totalPrice={room.totalPrice}
          stayDuration={room.stayDuration}
          totalRoomCount={room.totalRoomCount}
          reservedRoomCount={room.reservedRoomCount}
          capacity={room.capacity}
        />
      ))}
    </style.Wrapper>
  );
};

export default AccommodationRoomList;
