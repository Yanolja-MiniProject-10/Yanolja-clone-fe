import { useMutation } from "@tanstack/react-query";
import { postPurchase } from "../../reservation.api";
import { PostPurchasePayload } from "../../reservation.types";

export const usePostPurchase = () =>
  useMutation({
    mutationFn: (postPurchasePayload: PostPurchasePayload) => {
      return postPurchase(postPurchasePayload);
    },
  });
