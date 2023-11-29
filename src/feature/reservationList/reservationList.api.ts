import instance from "../../api/instance";
import { DeletePaymentResult, FetchPaymentResult, PaymentData } from "./reservationList.types";

/**
 * @returns 결제 완료 숙소 정보
 */
export const fetchPayment = async (): Promise<PaymentData[]> => {
  const { data }: { data: FetchPaymentResult } = await instance.get("payment");

  return data.data;
};

/**
 * @roomOptionIds 삭제할 장바구니 숙소 배열
 * @returns 장바구니 삭제 성공 여부
 */
export const deletePayment = async (deletePaymentId: PaymentData["paymentId"]): Promise<string> => {
  const { data }: { data: DeletePaymentResult } = await instance.delete("payment", {
    data: { paymentId: deletePaymentId },
  });

  return data.message;
};
