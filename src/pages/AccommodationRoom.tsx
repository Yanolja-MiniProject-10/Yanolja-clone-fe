import styled from "styled-components";
import AccommodationRoomInfo from "../feature/accommodationRoom/components/AccommodationRoomInfo";
import BottomBar from "../feature/accommodationRoom/components/BottomBar";
import { useParams, useNavigate } from "react-router-dom";
import { useRoomInfoQuery } from "../feature/accommodationRoom/hooks/queries/fetchData";
import { useRecoilValue } from "recoil";
import { accommodationMemberState } from "../recoil/accommodation/accommodationMember";
import { accommodationDateState } from "../recoil/accommodation/accommodationDate";
import { handleDateParam } from "../feature/accommodation/accommodation.utils";

const AccommodationRoom = () => {
  const { roomOptionId } = useParams();
  const navigation = useNavigate();

  const { guest } = useRecoilValue(accommodationMemberState);

  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const dateArray = handleDateParam(startDate, endDate);

  /**나중에 로직 수정 예정 */
  let reservationStartDate = "";
  let reservationEndDate = "";
  if (dateArray) {
    reservationStartDate = dateArray![0];
    reservationEndDate = dateArray![1];
  }

  const { status, data, error } = useRoomInfoQuery({
    id: roomOptionId,
    reservationStartDate,
    reservationEndDate,
    member: guest,
  });

  if (status === "error") {
    window.alert("잘못된 접근입니다. 메인 페이지로 이동합니다.");
    navigation("/");
    return null;
  }

  return (
    <Wrapper>
      <AccommodationRoomInfo status={status} data={data} error={error} />
      <BottomBar status={status} data={data} error={error} />
    </Wrapper>
  );
};

export default AccommodationRoom;

const Wrapper = styled.div`
  padding-bottom: 120px;
`;
