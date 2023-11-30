import authInstance from "../../api/authInstance";
import getLocalStorage from "../../util/getLocalStorage";
import { DeletePaymentResult, FetchPaymentResult, PaymentData } from "./reservationList.types";

/**
 * @returns 결제 완료 숙소 정보
 */
export const fetchPayment = async (): Promise<PaymentData[]> => {
  const { accessToken, refreshToken } = getLocalStorage();

  const { data }: { data: FetchPaymentResult } = await authInstance.get("payment", {
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
export const deletePayment = async (deletePaymentId: PaymentData["paymentId"]): Promise<string> => {
  const { accessToken, refreshToken } = getLocalStorage();

  const { data }: { data: DeletePaymentResult } = await authInstance.delete("payment", {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
    data: { paymentId: deletePaymentId },
  });

  return data.message;
};
