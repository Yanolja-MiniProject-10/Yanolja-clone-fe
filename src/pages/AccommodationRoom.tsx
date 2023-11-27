import styled from "styled-components";
import AccommodationRoomInfo from "../feature/accommodationRoom/components/AccommodationRoomInfo";
import BottomBar from "../feature/accommodationRoom/components/BottomBar";
import { useParams, useNavigate } from "react-router-dom";
import { useRoomInfoQuery } from "../feature/accommodationRoom/hooks/queries/fetchData";

const AccommodationRoom = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const { status, data, error } = useRoomInfoQuery({
    id,
    startDate: "2023-11-21",
    endDate: "2023-11-22",
    guest: 2,
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
