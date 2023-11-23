import AccommodationInfo from "../feature/accommodationInformation/components/AccommodationInfo";
import AccommodationRoomList from "../feature/accommodationInformation/components/AccommodationRoomList";

const AccommodationInformation = () => {
  return (
    <>
      <AccommodationInfo />
      {/* 현준님꺼 나중에 가져다 사용하기 */}
      <div style={{ paddingLeft: "3rem" }}>날짜, 인원 설정</div>
      <AccommodationRoomList />
    </>
  );
};

export default AccommodationInformation;
