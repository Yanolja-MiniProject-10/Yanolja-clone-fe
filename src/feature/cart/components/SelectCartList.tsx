import { useState } from "react";
import { SelectRoomProps } from "../cart.types";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import { SelectCartListWrapper, ControlCartList, CartListUl } from "../styles/selectCartList";

const SelectCartList = ({ rooms, selectedRooms, setSelectedRooms }: SelectRoomProps) => {
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleIsSelectAll = () => {
    setIsSelectAll(preIsSelectAll => !preIsSelectAll);

    if (!isSelectAll) {
      const newRooms = rooms?.flatMap(room => room.roomOptions);

      if (newRooms) {
        setSelectedRooms([...selectedRooms, ...newRooms]);
      }
    } else {
      setSelectedRooms([]);
    }
  };

  return (
    <SelectCartListWrapper>
      <ControlCartList $selectedRooms={selectedRooms.length}>
        <div className="all-check-box">
          <input type="checkbox" checked={rooms ? isSelectAll : true} onChange={handleIsSelectAll} id="all-check" />
          <label htmlFor="all-check">전체 선택</label>
        </div>

        <button
          onClick={selectedRooms.length ? () => console.log("선택 숙소 삭제 API") : undefined}
          className="delete-checked-box"
        >
          선택 숙소 삭제
        </button>
      </ControlCartList>

      {rooms ? (
        <CartListUl>
          <CartList
            rooms={rooms}
            setIsSelectAll={setIsSelectAll}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
          />
        </CartListUl>
      ) : (
        <EmptyCart />
      )}
    </SelectCartListWrapper>
  );
};

export default SelectCartList;
