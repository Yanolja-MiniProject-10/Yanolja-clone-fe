import { useQuery } from "@tanstack/react-query";
import { fetchCarts } from "../../cart.api";

export const useFetchCarts = () =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: () => fetchCarts(),
  });
