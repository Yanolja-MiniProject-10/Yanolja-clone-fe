import { RoomOption, Accommodations, CartData } from "../../types";

export interface FetchCartResult {
  status: number;
  message: string;
  data: CartData;
}

export interface CartListHeaderProps {
  accommodations: Accommodations[];
  isSelectAll: boolean;
  setIsSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CartRoomProps = Pick<CartListHeaderProps, "accommodations" | "setIsSelectAll">;

export interface CartModalProps {
  selectedRooms: RoomOption[] | [];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
