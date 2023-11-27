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
}
