import instance from "../../api/instance";
import { RoomInfoParams } from "./RoomInformation.types";

export const getRoomInfoData = async ({ id, reservationStartDate, reservationEndDate, member }: RoomInfoParams) => {
  const { data } = await instance.get(`/accommodations/roomOptions/${id}`, {
    params: {
      startDate: reservationStartDate,
      endDate: reservationEndDate,
      guest: member,
      roomOptionId: id,
    },
  });
  return data;
};
