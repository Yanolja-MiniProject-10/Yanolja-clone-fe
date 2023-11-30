import instance from "../../api/instance";
import getToken from "../../util/getToken";
import { AccommodationListParams } from "./accommodation.types";
import { handleDateParam } from "./accommodation.utils";

export const getAllAccommodationData = async ({ startDate, endDate, guest, region }: AccommodationListParams) => {
  const dateString: string[] | undefined = handleDateParam(startDate, endDate);
  const { accessToken, refreshToken } = getToken();

  if (!region || region === "default") {
    const { data } = await instance.get("/accommodations", {
      headers: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
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
