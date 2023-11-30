import instance from "../../api/instance";
import { AccommodationListParams } from "./accommodation.types";
import { handleDateParam } from "./accommodation.utils";

export const getAllAccommodationData = async ({ startDate, endDate, guest, region }: AccommodationListParams) => {
  const dateString: string[] | undefined = handleDateParam(startDate, endDate);

  if (!region || region === "default") {
    const { data } = await instance.get("/accommodations", {
      params: { startDate: dateString![0], endDate: dateString![1], guest },
    });
    return data;
  } else {
    const { data } = await instance.get("/accommodations", {
      params: { startDate: dateString![0], endDate: dateString![1], guest, region },
    });
    return data;
  }
};
