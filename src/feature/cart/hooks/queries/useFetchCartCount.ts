import { useQuery } from "@tanstack/react-query";
import { fetchCarts } from "../../cart.api";
import { UserToken } from "../../../login/login.types";

export const useFetchCartCount = (user: UserToken) =>
  useQuery({
    queryKey: ["fetchCarts"],
    queryFn: fetchCarts,
    enabled: !!user.accessToken,
  });
