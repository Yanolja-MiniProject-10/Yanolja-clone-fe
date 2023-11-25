import styled from "styled-components";
import AccommodationRoomInfo from "../feature/accommodationRoom/components/AccommodationRoomInfo";
import BottomBar from "../feature/accommodationRoom/components/BottomBar";
import { useLocation } from "react-router-dom";
import { useAccommodationInfoQuery } from "../feature/accommodationInformation/hooks/queries/fetchData";

const AccommodationRoom = () => {
  const { pathname } = useLocation();
  const match = pathname.match(/\/accommodation\/(\d+)\/room/);
  const accommodationId = match ? match[1] : null;

  //날짜 임의 지정
  const { status, data, error } = useAccommodationInfoQuery({
    id: accommodationId,
    startDate: "2023-11-21",
    endDate: "2023-11-25",
    guest: 2,
  });

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
