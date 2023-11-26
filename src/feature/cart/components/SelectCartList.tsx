import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { checkedCartRooms } from "../../../recoil/checkedCartRooms";
import CartRoom from "./CartRoom";
import EmptyCart from "./EmptyCart";
import CartModal from "./CartModal";
import { setAllCheked } from "../cart.utils";
import { SelectRoomProps } from "../cart.types";
import * as style from "../styles/selectCartList";
import * as commonStyle from "../../../styles/checkbox";

const SelectCartList = ({ accomodations }: SelectRoomProps) => {
  const [checkedRooms, setCheckedRooms] = useRecoilState(checkedCartRooms);
  const [isSelectAll, setIsSelectAll] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 최초 및 재입장 시 전체 선택 상태 기본값
  useEffect(() => {
    setAllCheked(accomodations, setCheckedRooms);
  }, [accomodations, setCheckedRooms]);

  // 전체 선택
  const handleIsSelectAll = () => {
    setIsSelectAll(preIsSelectAll => !preIsSelectAll);
    setCheckedRooms([]);

    if (!isSelectAll) {
      setAllCheked(accomodations, setCheckedRooms);
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
              checked={accomodations ? isSelectAll : true}
              onChange={handleIsSelectAll}
              id="all-check"
            />
            <label htmlFor="all-check">전체 선택</label>
          </commonStyle.Checkbox>

          <style.DeleteCheckedbox
            $selectedRooms={checkedRooms.length}
            onClick={checkedRooms.length ? handleDeleteCartRoom : undefined}
          >
            선택 숙소 삭제
          </style.DeleteCheckedbox>
        </style.SelectCartListHeader>

        <style.CartList>
          {accomodations !== undefined ? (
            <CartRoom accomodations={accomodations} setIsSelectAll={setIsSelectAll} />
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
