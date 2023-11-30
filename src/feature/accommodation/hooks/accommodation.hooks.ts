import { useQuery } from "@tanstack/react-query";
import { getAllAccommodationData } from "../api";
import { AccommodationListParams } from "../accommodation.types";

export const useAccommodationsListQuery = ({ startDate, endDate, guest, region }: AccommodationListParams) => {
  return useQuery({
    queryKey: ["accommodationsList", startDate, endDate, guest, region],
    queryFn: () => getAllAccommodationData({ startDate, endDate, guest, region }),
  });
};
