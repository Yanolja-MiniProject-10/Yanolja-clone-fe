export interface AccommodationInfoParams {
  id: string | undefined;
  startDate: string;
  endDate: string;
  guest: number;
}

export interface RoomListProps {
  id: string | undefined;
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
