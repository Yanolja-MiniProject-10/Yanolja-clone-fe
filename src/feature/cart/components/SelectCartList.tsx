import { useState } from "react";
import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { useRecoilState } from "recoil";
import CartRoom from "./CartRoom";
import EmptyCart from "./EmptyCart";
import { SelectRoomProps } from "../cart.types";
import { SelectCartListWrapper, SelectCartListHeader, DeleteCheckedbox, CartList } from "../styles/selectCartList";
import { Checkbox } from "../../../styles/checkbox";

const SelectCartList = ({ accomodations }: SelectRoomProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);

  const [isSelectAll, setIsSelectAll] = useState(false);

  // 전체 선택 시
  const handleIsSelectAll = () => {
    setIsSelectAll(preIsSelectAll => !preIsSelectAll);

    setCheckedRooms([]);

    if (!isSelectAll) {
      const newRooms = accomodations?.flatMap(room => room.roomOptions);

      if (newRooms) {
        setCheckedRooms([...newRooms]);
      }
    }
  };

  // 선택 숙소 삭제 시
  const handleDeleteCartRoom = () => {
    if (window.confirm("정말 선택한 숙소들을 장바구니에서 삭제하시겠습니까?")) {
      alert("삭제되었습니다, 장바구니 삭제 API");
    }
  };

  return (
    <SelectCartListWrapper>
      <SelectCartListHeader>
        <Checkbox>
          <input
            type="checkbox"
            checked={accomodations ? isSelectAll : true}
            onChange={handleIsSelectAll}
            id="all-check"
          />
          <label htmlFor="all-check">전체 선택</label>
        </Checkbox>

        <DeleteCheckedbox
          $selectedRooms={checkedRooms.length}
          onClick={checkedRooms.length ? handleDeleteCartRoom : undefined}
        >
          선택 숙소 삭제
        </DeleteCheckedbox>
      </SelectCartListHeader>

      <CartList>
        {accomodations ? <CartRoom accomodations={accomodations} setIsSelectAll={setIsSelectAll} /> : <EmptyCart />}
      </CartList>
    </SelectCartListWrapper>
  );
};

export default SelectCartList;
