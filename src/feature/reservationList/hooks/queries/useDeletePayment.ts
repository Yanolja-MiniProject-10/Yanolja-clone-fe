import { QueryClient, useMutation } from "@tanstack/react-query";
import { deletePayment } from "../../reservationList.api";

export const useDeletePayment = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: deletePayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchPayment"] });
    },
  });
