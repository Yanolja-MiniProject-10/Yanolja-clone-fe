import { SetterOrUpdater } from "recoil";
import { Accommodations, RoomOption } from "../../types";

export const calculateTotalPrice = (selectedRooms: RoomOption[]) => {
  return selectedRooms.reduce((total, item) => total + item.pricePerNight * item.stayDuration, 0).toLocaleString();
};

export const setAllCheked = (accomodations: Accommodations[], setCheckedRooms: SetterOrUpdater<RoomOption[]>) => {
  const allRooms = accomodations?.flatMap(accomodations => accomodations.roomOptions);

  if (allRooms) {
    setCheckedRooms([...allRooms]);
  }
};
