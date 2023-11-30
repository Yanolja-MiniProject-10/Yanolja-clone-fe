import { useQueryClient } from "@tanstack/react-query";
import { useDeletePayment } from "../hooks/queries/useDeletePayment";
import { PaymentData, ReserCancelModalProps } from "../reservationList.types";
import * as style from "../../cart/styles/cartModal";

const ReservationCancelModal = ({ reservationNumber, paymentId, setIsModalOpen }: ReserCancelModalProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deletePayment } = useDeletePayment(queryClient);

  const handleCancleReservation = async (deletePaymentId: PaymentData["paymentId"]) => {
    try {
      const data = await deletePayment(deletePaymentId);
      if (data !== "SUCCESS") {
        new Error("예약 최소 실패");
      }
      setIsModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInnerClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <style.ModalWrapper onClick={closeModal}>
      <style.ModalInner onClick={handleInnerClick}>
        <style.ModalContents>
          <style.ModalQ>선택 숙소를 삭제하시겠습니까?</style.ModalQ>
          <style.ModalRoomName>
            <span>숙소 예약 번호</span>
            <span>{reservationNumber}</span>
          </style.ModalRoomName>
        </style.ModalContents>

        <style.ModalBtns>
          <style.ModalClose onClick={closeModal}>아니요</style.ModalClose>
          <style.ModalRoomDelete onClick={() => handleCancleReservation(paymentId)}>삭제</style.ModalRoomDelete>
        </style.ModalBtns>
      </style.ModalInner>
    </style.ModalWrapper>
  );
};

export default ReservationCancelModal;
