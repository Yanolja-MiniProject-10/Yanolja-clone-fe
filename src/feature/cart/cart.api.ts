import authInstance from "../../api/authInstance";
import { CartData, RoomOption } from "../../types";
import getLocalStorage from "../../util/getLocalStorage";
import { FetchCartResult } from "./cart.types";

/**
 * @returns 장바구니 정보
 */
export const fetchCarts = async (): Promise<CartData> => {
  const { accessToken } = getLocalStorage();

  const { data }: { data: FetchCartResult } = await authInstance.get("carts", {
    headers: {
      Authorization: accessToken,
    },
  });

  return data.data;
};

/**
 * @roomOptionIds 삭제할 장바구니 숙소 배열
 * @returns 장바구니 삭제 성공 여부
 */
export const deleteCarts = async (roomOptions: RoomOption[]): Promise<string> => {
  const { accessToken } = getLocalStorage();

  const cartProductsIds = roomOptions.map(RoomOption => RoomOption.cartProductId);

  const { data }: { data: string } = await authInstance.delete("carts", {
    headers: {
      Authorization: accessToken,
    },
    data: { cartProducts: cartProductsIds },
  });

  return data;
};
