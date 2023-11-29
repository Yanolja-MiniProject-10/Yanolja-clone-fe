import { useMutation } from "@tanstack/react-query";
import { postPaymentCart } from "../../reservation.api";
import { PostPaymentCart } from "../../reservation.types";

export const usePostPaymentCart = () =>
  useMutation({
    mutationFn: ({ postPaymentCartPayload, paymentData, setPaymentData }: PostPaymentCart) => {
      return postPaymentCart({ postPaymentCartPayload, paymentData, setPaymentData });
    },
  });
