import AccommodationNav from "../components/accommodation/AccommodationNav.tsx";
import ToTopButton from "../components/toTopButton/ToTopButton.tsx";
import AccommodationInfo from "../feature/accommodationInformation/components/AccommodationInfo";
import AccommodationRoomList from "../feature/accommodationInformation/components/AccommodationRoomList";
import { NavWrapper } from "../feature/accommodationInformation/styles/accommodationInfo.ts";

const AccommodationInformation = () => {
  return (
    <>
      <AccommodationInfo />
      <NavWrapper>
        <AccommodationNav />
      </NavWrapper>
      <AccommodationRoomList />
      <ToTopButton />
    </>
  );
};

export default AccommodationInformation;
