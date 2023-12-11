import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCart } from "../../api";
import { PostCart } from "../../accommodationInformation.types";

export const usePostCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration }: PostCart) => {
      return postCart(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
    },
  });
};
