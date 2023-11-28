import { useQuery } from "@tanstack/react-query";
import { getAllAccommodationCategoryData } from "../api";
import { AccommodationCategoryParams } from "../category.types";
export const useAccommodationsCategoryQuery = ({
  startDate,
  endDate,
  guest,
  category,
}: AccommodationCategoryParams) => {
  return useQuery({
    queryKey: ["accommodationsList", category],
    queryFn: () => getAllAccommodationCategoryData({ startDate, endDate, guest, category }),
  });
};
