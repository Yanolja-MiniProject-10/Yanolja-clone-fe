import { useQuery } from "@tanstack/react-query";
import { getRoomInfoData } from "../../api";
import { AccommodationInfoParams } from "../../../accommodationInformation/accommodationInformation.types";

export const useRoomInfoQuery = ({ id, startDate, endDate, guest }: AccommodationInfoParams) => {
  return useQuery({
    queryKey: ["getRoomInfoData"],
    queryFn: () => getRoomInfoData({ id, startDate, endDate, guest }),
  });
};
