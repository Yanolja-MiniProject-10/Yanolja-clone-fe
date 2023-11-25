import instance from "../../api/instance";
import { RoomInfoParams } from "./RoomInformation.types";

export const getRoomInfoData = async ({ id, startDate, endDate, guest }: RoomInfoParams) => {
  const { data } = await instance.get(`/accommodations/roomOptions/${id}`, {
    params: {
      startDate,
      endDate,
      guest,
      roomOptionId: id,
    },
  });
  return data;
};
