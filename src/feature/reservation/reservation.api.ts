import instance from "../../api/instance";
import { PostPaymentCart, PostPaymentCartResult } from "./reservation.types";

/**
 * @postPaymentCartPayload post body 요청 정보
 * @paymentData 이전 장바구니 결제 대기 상품
 * @setPaymentData 장바구니 결제 대기 상품 recoil setter
 */
export const postPaymentCart = async ({ postPaymentCartPayload, paymentData, setPaymentData }: PostPaymentCart) => {
  const { data }: { data: PostPaymentCartResult } = await instance.post("payment/cart", postPaymentCartPayload);
  setPaymentData({ ...paymentData, ...data.data });
};
