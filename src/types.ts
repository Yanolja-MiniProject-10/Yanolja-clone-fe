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
  transportation?: string;
  totalPrice?: number;
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
  count?: number;
  accommodations: Accommodations[];
}
