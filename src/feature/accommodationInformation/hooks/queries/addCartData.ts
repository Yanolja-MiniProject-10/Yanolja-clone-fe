import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCart } from "../../api";
import { PostCart } from "../../accommodationInformation.types";
import { useSetRecoilState } from "recoil";
import { cartButtonState } from "../../recoil/cartButtonDisabled";

export const usePostCart = () => {
  const queryClient = useQueryClient();

  const setIsButtonDisabled = useSetRecoilState(cartButtonState);

  return useMutation({
    mutationFn: ({ roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration }: PostCart) => {
      return postCart(roomOptionId, numberOfGuest, reservationStartDate, reservationEndDate, stayDuration);
    },
    onSuccess: () => {
      setIsButtonDisabled(true);
      queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
      setTimeout(() => setIsButtonDisabled(false), 3000);
    },
  });
};
