import {
  getAllAccommodations,
  getRelatedAccommodations,
  getRegionAccommodations,
  getRankingAccommodations,
  getFestivalInfo,
  getRegionList,
} from "../../home.api";
import { useQuery } from "@tanstack/react-query";
import { RelatedProps } from "../../home.types";

export const useAllAccommodations = () => {
  return useQuery({
    queryKey: ["allAccommodations"],
    queryFn: getAllAccommodations,
    staleTime: 1 * 60 * 1000,
  });
};

export const useRelatedAccommodations = ({ category, region }: RelatedProps) => {
  const relatedRequest = { category, region };
  return useQuery({
    queryKey: ["relatedAccommodations", category, region],
    queryFn: () => getRelatedAccommodations(relatedRequest),
    enabled: !!category,
    staleTime: 1 * 60 * 1000,
  });
};

export const useRegionAccommodations = (region: string) => {
  return useQuery({
    queryKey: ["regionAccommodations", region],
    queryFn: () => getRegionAccommodations(region),
    staleTime: 1 * 60 * 1000,
  });
};

export const useRankingAccommodations = () => {
  return useQuery({
    queryKey: ["rankingAccommodations"],
    queryFn: getRankingAccommodations,
    staleTime: 1 * 60 * 1000,
  });
};

export const useFestivalInfo = () => {
  return useQuery({
    queryKey: ["festivalInfo"],
    queryFn: getFestivalInfo,
    staleTime: 1 * 60 * 1000,
  });
};

export const useRegionList = () => {
  return useQuery({
    queryKey: ["regionList"],
    queryFn: getRegionList,
    staleTime: 1 * 60 * 1000,
  });
};
