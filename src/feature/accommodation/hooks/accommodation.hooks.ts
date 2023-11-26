import { useQuery } from "@tanstack/react-query";
import { getAllAccommodations } from "../api";

export const useAccommodationsList = () => {
  return useQuery({
    queryKey: ["accommodationsList"],
    queryFn: getAllAccommodations,
  });
};
