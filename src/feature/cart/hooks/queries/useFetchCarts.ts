import { useQuery } from "@tanstack/react-query";
import { fetchCarts } from "../../cart.api";

export const useFetchCarts = (isLoginModal?: boolean) =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
    enabled: isLoginModal,
  });
