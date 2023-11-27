export interface RoomInfoParams {
  id: string | undefined;
  startDate: string;
  endDate: string;
  guest: number;
}

export interface RoomInfoProps {
  status: "error" | "pending" | "success";
  data: {
    status: number;
    data: {
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
      description: string;
    };
  };
  error: Error | null;
}
