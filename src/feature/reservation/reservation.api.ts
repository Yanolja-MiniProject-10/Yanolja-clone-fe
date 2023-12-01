import authInstance from "../../api/authInstance";
import getLocalStorage from "../../util/getLocalStorage";
import { PostPaymentCart, PostPaymentCartResult, PostPurchasePayload, PostPurchaseResult } from "./reservation.types";

/**
 * @postPaymentCartPayload post body 요청 정보
 * @paymentData 이전 장바구니 결제 대기 상품
 * @setPaymentData 장바구니 결제 대기 상품 recoil setter
 */
export const postPaymentCart = async ({
  postPaymentCartPayload,
  paymentData,
  setPaymentData,
}: PostPaymentCart): Promise<void> => {
  const { accessToken, refreshToken } = getLocalStorage();

  const { data }: { data: PostPaymentCartResult } = await authInstance.post("/payment/cart", {
    ...postPaymentCartPayload,
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });
  setPaymentData({ ...paymentData, ...data.data });
};

/**
 * @postPurchasePayload post body 요청 정보
 * @return 결제 성공 메시지
 */
export const postPurchase = async (postPurchasePayload: PostPurchasePayload): Promise<string> => {
  const { accessToken, refreshToken } = getLocalStorage();

  const { data }: { data: PostPurchaseResult } = await authInstance.post("/payment/purchase", {
    ...postPurchasePayload,
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });
  return data.message;
};
