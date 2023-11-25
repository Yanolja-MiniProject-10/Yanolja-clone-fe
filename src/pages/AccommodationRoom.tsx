import styled from "styled-components";
import AccommodationRoomInfo from "../feature/accommodationRoom/components/AccommodationRoomInfo";
import BottomBar from "../feature/accommodationRoom/components/BottomBar";
import { useParams } from "react-router-dom";
import { useRoomInfoQuery } from "../feature/accommodationRoom/hooks/queries/fetchData";

const AccommodationRoom = () => {
  const { id } = useParams();

  const { status, data, error } = useRoomInfoQuery({
    id,
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
