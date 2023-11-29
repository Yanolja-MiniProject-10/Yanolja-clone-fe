import instance from "../../api/instance";
import { handleDateParam } from "../accommodation/accommodation.utils";
import { AccommodationSearchParams } from "./search.types";

export const getAllAccommodationSearchData = async ({ startDate, endDate, guest, name }: AccommodationSearchParams) => {
  const dateString: string[] | undefined = handleDateParam(startDate, endDate);
  const { data } = await instance.get("/accommodations", {
    params: { startDate: dateString![0], endDate: dateString![1], guest, name: name ? name : "null" },
  });
  return data;
};
