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
    onError: () => {
      window.alert("상품 예약 과정에서 문제가 발생했습니다. 메인화면으로 돌아갑니다.");
      navigation("/");
    },
  });
};
