import { getAllAccommodations } from "./../../api/accommodation";
import { useQuery } from "@tanstack/react-query";

export const useAllAccommodations = () => {
  return useQuery({
    queryKey: ["AllAccommodations"],
    queryFn: getAllAccommodations,
  });
};
