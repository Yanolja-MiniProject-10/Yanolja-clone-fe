import { useQuery } from "@tanstack/react-query";
import instance from "../../../../api/instance";

interface AccommodationInfoParams {
  id: string | undefined;
  startDate: string;
  endDate: string;
  guest: number;
}

const getAccommodationInfoData = async ({ id, startDate, endDate, guest }: AccommodationInfoParams) => {
  const { data } = await instance.get(`/accommodations/${id}`, {
    params: {
      startDate,
      endDate,
      guest,
      accommodationId: id,
    },
  });
  return data;
};

export const useAccommodationInfoQuery = ({ id, startDate, endDate, guest }: AccommodationInfoParams) => {
  return useQuery({
    queryKey: ["getAccommodationInfoData", id, startDate, endDate, guest],
    queryFn: () => getAccommodationInfoData({ id, startDate, endDate, guest }),
  });
};
