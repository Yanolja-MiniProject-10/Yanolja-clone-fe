import instance from "../../api/instance";
import { AccommodationInfoParams } from "./accommodationInformation.types";

export const getAccommodationInfoData = async ({ id, startDate, endDate, guest }: AccommodationInfoParams) => {
  const { data } = await instance.get(`/accommodations/${id}`, {
    params: {
      startDate,
      endDate,
      guest,
      accommodationId: id,
    },
  });
  return data;
};
