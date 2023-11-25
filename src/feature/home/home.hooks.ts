import {
  getAllAccommodations,
  getRelatedAccommodations,
  getRegionAccommodations,
  getRankingAccommodations,
  getFestivalInfo,
} from "./home.api";
import { useQuery } from "@tanstack/react-query";
import { RelatedProps } from "./home.types";

export const useAllAccommodations = () => {
  return useQuery({
    queryKey: ["allAccommodations"],
    queryFn: getAllAccommodations,
  });
};

export const useRelatedAccommodations = ({ category, region }: RelatedProps) => {
  const relatedRequest = { category, region };
  return useQuery({
    queryKey: ["relatedAccommodations", category, region],
    queryFn: () => getRelatedAccommodations(relatedRequest),
  });
};

export const useRegionAccommodations = (region: string) => {
  return useQuery({
    queryKey: ["regionAccommodations", region],
    queryFn: () => getRegionAccommodations(region),
  });
};

export const useRankingAccommodations = () => {
  return useQuery({
    queryKey: ["rankingAccommodations"],
    queryFn: getRankingAccommodations,
  });
};

export const useFestivalInfo = () => {
  return useQuery({
    queryKey: ["festivalInfo"],
    queryFn: getFestivalInfo,
  });
};
