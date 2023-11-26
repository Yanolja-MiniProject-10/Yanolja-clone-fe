import { useQuery } from "@tanstack/react-query";
import { AccommodationInfoParams } from "../../accommodationInformation.types";
import { getAccommodationInfoData } from "../../api";

export const useAccommodationInfoQuery = ({ id, startDate, endDate, guest }: AccommodationInfoParams) => {
  return useQuery({
    queryKey: ["getAccommodationInfoData"],
    queryFn: () => getAccommodationInfoData({ id, startDate, endDate, guest }),
  });
};
