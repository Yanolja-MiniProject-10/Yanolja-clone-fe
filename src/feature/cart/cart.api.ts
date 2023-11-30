import instance from "../../api/instance";
import { CartData, RoomOption } from "../../types";
import getToken from "../../util/getToken";
import { FetchCartResult } from "./cart.types";

/**
 * @returns 장바구니 정보
 */
export const fetchCarts = async (): Promise<CartData> => {
  const { accessToken, refreshToken } = getToken();

  const { data }: { data: FetchCartResult } = await instance.get("carts", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });

  return data.data;
};

/**
 * @roomOptionIds 삭제할 장바구니 숙소 배열
 * @returns 장바구니 삭제 성공 여부
 */
export const deleteCarts = async (roomOptions: RoomOption[]): Promise<string> => {
  const { accessToken, refreshToken } = getToken();

  const cartProductsIds = roomOptions.map(RoomOption => RoomOption.cartProductId);

  const { data }: { data: string } = await instance.delete("carts", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
    data: { cartProducts: cartProductsIds },
  });

  return data;
};
