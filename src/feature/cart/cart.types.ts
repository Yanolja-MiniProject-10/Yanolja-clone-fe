import { RoomOption, Accommodations, CartData } from "../../types";

export interface FetchCartResult {
  status: number;
  message: string;
  data: CartData;
}

export interface SelectCartListProps {
  accommodations: Accommodations[] | undefined;
}

export interface CartRoomProps extends SelectCartListProps {
  accommodations: Accommodations[];
  setIsSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RoomListProps extends CartRoomProps {
  roomOption: RoomOption;
}

export interface CartModalProps {
  selectedRooms: RoomOption[] | [];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
