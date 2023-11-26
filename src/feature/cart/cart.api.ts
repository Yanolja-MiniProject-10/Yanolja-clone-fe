import instance from "../../api/instance";
import { FetchCartResult, CartData, RoomOption } from "./cart.types";

/**
 * @returns 장바구니 정보
 */
export const fetchCarts = async (): Promise<CartData> => {
  const { data }: { data: FetchCartResult } = await instance.get("carts");

  return data.data;
};

/**
 * @roomOptionIds 삭제할 장바구니 숙소 배열
 * @returns 장바구니 삭제 성공 여부
 */
export const deleteCarts = async (roomOptions: RoomOption[]): Promise<string> => {
  const cartProductsIds = roomOptions.map(RoomOption => RoomOption.cartProductId);

  console.log(cartProductsIds);

  const { data }: { data: string } = await instance.delete("carts", {
    data: { cartProducts: cartProductsIds },
  });

  return data;
};
