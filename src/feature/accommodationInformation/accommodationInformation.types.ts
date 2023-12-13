export interface AccommodationInfoParams {
  id: string | undefined;
  reservationStartDate: string;
  reservationEndDate: string;
  member: number;
}

export interface RoomListProps {
  id: number;
  accommodationId: string | undefined;
  name: string;
  roomOptionImage: { mainImageUrls: string[] };
  checkInTime: string;
  checkOutTime: string;
  totalPrice: number;
  stayDuration: number;
  totalRoomCount: number;
  reservedRoomCount: number;
  capacity: number;
}

export interface PostCart {
  roomOptionId: number;
  numberOfGuest: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}

export interface PostSingleReservation {
  roomOptionId: number;
  numberOfGuest: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}

export interface CartButtonProps {
  available: boolean;
  roomOptionId: number;
  numberOfGuest: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}

export interface ReservationButtonProps {
  available: boolean;
  text: string;
  $isWide?: boolean;
  id: number;
  guest: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}
