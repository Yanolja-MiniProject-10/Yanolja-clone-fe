export interface RoomInfoParams {
  id: string | undefined;
  reservationStartDate: string;
  reservationEndDate: string;
  member: number;
}

export interface RoomInfoProps {
  data: {
    status: number;
    data: {
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
      description: string;
      capacity: number;
    };
  };
}
