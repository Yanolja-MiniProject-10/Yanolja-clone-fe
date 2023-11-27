import { useQuery } from "@tanstack/react-query";
import { getAllAccommodationData } from "../api";
import { AccommodationListParams } from "../accommodation.types";

export const useAccommodationsListQuery = ({ startDate, endDate, guest }: AccommodationListParams) => {
  return useQuery({
    queryKey: ["accommodationsList"],
    queryFn: () => getAllAccommodationData({ startDate, endDate, guest }),
  });
};
