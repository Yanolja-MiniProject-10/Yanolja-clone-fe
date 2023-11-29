import { QueryClient, useMutation } from "@tanstack/react-query";
import { postCart } from "../../api";
import { PostCart } from "../../accommodationInformation.types";

export const usePostCart = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: ({ roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration }: PostCart) => {
      return postCart(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
    },
  });
