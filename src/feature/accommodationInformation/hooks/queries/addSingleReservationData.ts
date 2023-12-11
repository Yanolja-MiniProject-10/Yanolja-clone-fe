import { useMutation } from "@tanstack/react-query";
import { postReservation } from "../../api";
import { PostSingleReservation } from "../../accommodationInformation.types";

export const usePostSingleReservation = () => {
  return useMutation({
    mutationFn: ({
      roomOptionId,
      numberOfGuest,
      reservationStartDate,
      reservationEndDate,
      stayDuration,
    }: PostSingleReservation) => {
      return postReservation(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
    },
  });
};
