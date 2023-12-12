import { useRecoilState } from "recoil";
import { checkedCartRooms } from "../recoil/checkedCartRooms";
import { useState } from "react";
import { setAllCheked } from "../cart.utils";
import CartModal from "./CartModal";
import { CartListHeaderProps } from "../cart.types";
import * as commonStyle from "../../../styles/checkbox";
import * as style from "../styles/cartListHeader";

const CartListHeader = ({ accommodations, isSelectAll, setIsSelectAll }: CartListHeaderProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 전체 선택
  const handleIsSelectAll = () => {
    setIsSelectAll(preIsSelectAll => !preIsSelectAll);
    setCheckedRooms([]);

    if (!isSelectAll) {
      setAllCheked(accommodations, setCheckedRooms);
    }
  };

  return (
    <>
      <style.SelectCartListHeader>
        <commonStyle.Checkbox>
          <input type="checkbox" checked={isSelectAll} onChange={handleIsSelectAll} id="all-check-btn" />
          <label htmlFor="all-check-btn">전체 선택</label>
        </commonStyle.Checkbox>

        <style.DeleteCheckedbox
          $selectedRooms={checkedRooms.length}
          onClick={
            checkedRooms.length
              ? () => {
                  setIsModalOpen(true);
                }
              : undefined
          }
        >
          선택 숙소 삭제
        </style.DeleteCheckedbox>
      </style.SelectCartListHeader>

      {isModalOpen ? <CartModal selectedRooms={checkedRooms} setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
};

export default CartListHeader;
