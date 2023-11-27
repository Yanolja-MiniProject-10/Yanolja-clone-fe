export interface RoomOption {
  cartProductId: number;
  roomOptionId: number;
  name: string;
  thumbnailImage: string;
  capacity: number;
  pricePerNight: number;
  reservationStartDate: string;
  reservationEndDate: string;
  stayDuration: number;
}

export interface Accommodations {
  accommodationId: number;
  name: string;
  address: string;
  thumbnailImageUrl: string;
  roomOptions: RoomOption[];
}

export interface CartData {
  cartId: number;
  accommodations: Accommodations[];
}

export interface FetchCartResult {
  status: number;
  message: string;
  data: CartData;
}

export interface DeleteCartRooms {
  roomOptionId: RoomOption["roomOptionId"][];
}

export interface PayCartRooms {
  cartId: number;
  cartProductId: RoomOption["cartProductId"][];
}

export interface SelectRoomProps {
  accomodations: Accommodations[] | undefined;
}

export interface CartRoomProps extends SelectRoomProps {
  accomodations: Accommodations[];
  setIsSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RoomListProps extends CartRoomProps {
  roomOption: RoomOption;
}

export interface CartModalProps {
  selectedRooms: RoomOption[] | [];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
