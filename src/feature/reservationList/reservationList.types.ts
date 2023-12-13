export interface PaymentRoomOption {
  paymentProductId: number;
  accommodationId: number;
  roomOptionId: number;
  name: string;
  thumbnailImage: string;
  capacity: number;
  pricePerNight: number;
  totalPrice: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
  numberOfGuest: number;
  transportation: string;
}

export interface PayedRoomOptionProps {
  roomOption: PaymentRoomOption;
  isCanceled: boolean;
}

export interface PaymentAccommodation {
  accommodationId: number;
  name: string;
  address: string;
  thumbnailImageUrl: string;
  roomOptions: PaymentRoomOption[];
}

export interface PaymentData {
  paymentId: number;
  paymentAmount: number;
  paymentCanceled: boolean;
  reservationNumber: string;
  accommodations: PaymentAccommodation[];
}

export interface FetchPaymentResult {
  status: number;
  message: string;
  data: PaymentData[];
}

export interface DeletePaymentResult {
  status: number;
  message: string;
}

export interface ReserCancelModalProps {
  reservationNumber: string;
  paymentId: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
