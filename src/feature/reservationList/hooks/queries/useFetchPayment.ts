import { useQuery } from "@tanstack/react-query";
import { fetchPayment } from "../../reservationList.api";

export const useFetchPayment = () => useQuery({ queryKey: ["fetchPayment"], queryFn: () => fetchPayment() });
