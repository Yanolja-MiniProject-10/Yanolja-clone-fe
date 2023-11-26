import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteCarts } from "../../cart.api";

export const useDeleteCarts = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: deleteCarts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
    },
  });
