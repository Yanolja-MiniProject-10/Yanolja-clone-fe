import { useQuery } from "@tanstack/react-query";
import { getRoomInfoData } from "../../api";
import { AccommodationInfoParams } from "../../../accommodationInformation/accommodationInformation.types";

export const useRoomInfoQuery = ({ id, reservationStartDate, reservationEndDate, member }: AccommodationInfoParams) => {
  return useQuery({
    queryKey: ["getRoomInfoData", id],
    queryFn: () => getRoomInfoData({ id, reservationStartDate, reservationEndDate, member }),
  });
};
