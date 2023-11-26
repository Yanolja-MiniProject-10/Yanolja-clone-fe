import { useQuery } from "@tanstack/react-query";
import { getAllAccommodations } from "./accommodation.api";

export const useAccommodationsList = () => {
  return useQuery({
    queryKey: ["accommodationsList"],
    queryFn: getAllAccommodations,
  });
};
