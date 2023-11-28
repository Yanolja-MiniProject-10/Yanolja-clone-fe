import { QueryClient, useMutation } from "@tanstack/react-query";
import { postCart } from "../../api";

export interface PostCart {
  roomOptionId: number;
  numberOfGuest: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}

export const usePostCart = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: ({ roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration }: PostCart) => {
      return postCart(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
    },
  });
