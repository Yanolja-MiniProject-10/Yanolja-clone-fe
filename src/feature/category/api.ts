import instance from "../../api/instance";
import { AccommodationCategoryParams } from "./category.types";
import { handleDateParam } from "../accommodation/accommodation.utils";

export const getAllAccommodationCategoryData = async ({
  startDate,
  endDate,
  guest,
  category,
}: AccommodationCategoryParams) => {
  const dateString: string[] | undefined = handleDateParam(startDate, endDate);
  const { data } = await instance.get("/accommodations/category", {
    params: { startDate: dateString![0], endDate: dateString![1], guest, category },
  });
  return data;
};
