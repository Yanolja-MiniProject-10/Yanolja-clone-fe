import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import { setAllCheked } from "../cart.utils";
import CartRoom from "./CartRoom";
import EmptyCart from "./EmptyCart";
import CartModal from "./CartModal";
import { SelectCartListProps } from "../cart.types";
import * as style from "../styles/selectCartList";
import * as commonStyle from "../../../styles/checkbox";

const SelectCartList = ({ accommodations }: SelectCartListProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);
  const [isSelectAll, setIsSelectAll] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(accommodations);

  // 최초 및 재입장 시 전체 선택 상태 기본값
  useEffect(() => {
    setAllCheked(accommodations, setCheckedRooms);
  }, [accommodations, setCheckedRooms]);

  // 전체 선택
  const handleIsSelectAll = () => {
    setIsSelectAll(preIsSelectAll => !preIsSelectAll);
    setCheckedRooms([]);

    if (!isSelectAll) {
      setAllCheked(accommodations, setCheckedRooms);
    }
  };

  // 선택 숙소 삭제 모달 생성
  const handleDeleteCartRoom = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <style.SelectCartListWrapper>
        <style.SelectCartListHeader>
          <commonStyle.Checkbox>
            <input
              type="checkbox"
              checked={accommodations ? isSelectAll : true}
              onChange={handleIsSelectAll}
              id="all-check-btn"
            />
            <label htmlFor="all-check-btn">전체 선택</label>
          </commonStyle.Checkbox>

          <style.DeleteCheckedbox
            $selectedRooms={checkedRooms.length}
            onClick={checkedRooms.length ? handleDeleteCartRoom : undefined}
          >
            선택 숙소 삭제
          </style.DeleteCheckedbox>
        </style.SelectCartListHeader>

        <style.CartList>
          {accommodations !== undefined ? (
            accommodations.length ? (
              <CartRoom accommodations={accommodations} setIsSelectAll={setIsSelectAll} />
            ) : (
              <EmptyCart />
            )
          ) : (
            <EmptyCart />
          )}
        </style.CartList>
      </style.SelectCartListWrapper>

      {isModalOpen ? <CartModal selectedRooms={checkedRooms} setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
};

export default SelectCartList;
