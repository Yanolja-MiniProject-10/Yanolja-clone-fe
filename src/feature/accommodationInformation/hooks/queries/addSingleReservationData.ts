import { useMutation } from "@tanstack/react-query";
import { postReservation } from "../../api";
import { PostSingleReservation } from "../../accommodationInformation.types";
import { useNavigate } from "react-router-dom";

export const usePostSingleReservation = () => {
  const navigation = useNavigate();

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
    onSuccess: data => {
      const cartId = data.data.cartId;
      const cartProducts = [data.data.accommodations[0].roomOptions[0].cartProductId];

      navigation("/reservation", {
        state: {
          cartId,
          cartProducts,
        },
      });
    },
  });
};
