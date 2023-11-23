export interface RoomOption {
  roomOptionId: number;
  name: string;
  description?: string;
  thumbnailImage: string;
  capacity: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
  pricePerNight: number;
  paymentAmount: number;
}

export interface Accommodation {
  accommodationId: number;
  name: string;
  address: string;
  roomOptions: RoomOption[];
}

export interface SelectRoomProps {
  rooms: Accommodation[] | null; // 데이터 fetch 실패 시 받아오는 값 null로 받을 수 있게 합의하기
  selectedRooms: RoomOption[];
  setSelectedRooms: React.Dispatch<React.SetStateAction<RoomOption[]>>;
}

export interface CartListProps extends SelectRoomProps {
  rooms: Accommodation[];
  setIsSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}
