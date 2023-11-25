import instance from "../../api/instance";
import { FetchCartResult, CartData } from "./cart.types";

/**
 * @returns 장바구니 정보
 */
export const fetchCarts = async (): Promise<CartData> => {
  const { data }: { data: FetchCartResult } = await instance.get("carts");

  return data.data;
};
