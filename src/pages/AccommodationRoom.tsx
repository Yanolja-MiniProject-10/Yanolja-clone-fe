import styled from "styled-components";
import AccommodationRoomInfo from "../feature/accommodationRoom/components/AccommodationRoomInfo";
import BottomBar from "../feature/accommodationRoom/components/BottomBar";
import { useParams, useNavigate } from "react-router-dom";
import { useRoomInfoQuery } from "../feature/accommodationRoom/hooks/queries/fetchData";
import { useRecoilValue } from "recoil";
import { accommodationMemberState } from "../recoil/accommodationMember";
import { accommodationDateState } from "../recoil/accommodationDate";
import { handleDateParam } from "../feature/accommodation/accommodation.utils";
import { useEffect } from "react";
import AccommodationRoomInfoSkeleton from "../feature/accommodationRoom/components/AccommodationRoomInfoSkeleton";
import BottomBarSkeleton from "../feature/accommodationRoom/components/BottomBarSkeleton";

const AccommodationRoom = () => {
  const { roomOptionId } = useParams();
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

  const { status, data } = useRoomInfoQuery({
    id: roomOptionId,
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
    <Wrapper>
      <AccommodationRoomInfoSkeleton />
      <BottomBarSkeleton />
    </Wrapper>
  ) : (
    <Wrapper>
      <AccommodationRoomInfo data={data} />
      <BottomBar data={data} />
    </Wrapper>
  );
};

export default AccommodationRoom;

const Wrapper = styled.div`
  padding-bottom: 120px;
`;
