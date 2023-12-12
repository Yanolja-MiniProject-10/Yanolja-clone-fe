import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCart } from "../../api";
import { PostCart } from "../../accommodationInformation.types";
import { useSetRecoilState } from "recoil";
import { cartButtonState } from "../../recoil/cartButtonDisabled";

export const usePostCart = () => {
  const queryClient = useQueryClient();

  const navigation = useNavigate();

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
    onError: () => {
      window.alert("장바구니에 상품을 추가하는 과정에서 문제가 발생했습니다. 메인화면으로 돌아갑니다.");
      navigation("/");
    },
  });
};
