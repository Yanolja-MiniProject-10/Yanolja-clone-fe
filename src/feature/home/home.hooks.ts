import {
  getAllAccommodations,
  getRelatedAccommodations,
  getRegionAccommodations,
  getRankingAccommodations,
} from "./home.api";
import { useQuery } from "@tanstack/react-query";

export const useAllAccommodations = () => {
  return useQuery({
    queryKey: ["allAccommodations"],
    queryFn: getAllAccommodations,
  });
};

export const useRelatedAccommodations = () => {
  return useQuery({
    queryKey: ["relatedAccommodations"],
    queryFn: getRelatedAccommodations,
  });
};

export const useRegionAccommodations = () => {
  return useQuery({
    queryKey: ["regionAccommodations"],
    queryFn: getRegionAccommodations,
  });
};

export const useRankingAccommodations = () => {
  return useQuery({
    queryKey: ["rankingAccommodations"],
    queryFn: getRankingAccommodations,
  });
};
