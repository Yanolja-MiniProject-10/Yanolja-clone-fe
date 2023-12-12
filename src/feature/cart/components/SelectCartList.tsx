import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { checkedCartRooms } from "../recoil/checkedCartRooms";
import { setAllCheked } from "../cart.utils";
import CartListHeader from "./CartListHeader";
import CartRoom from "./CartRoom";
import EmptyCart from "./EmptyCart";
import { Accommodations } from "../../../types";
import * as style from "../styles/selectCartList";

const SelectCartList = ({ accommodations }: { accommodations: Accommodations[] }) => {
  const setCheckedRooms = useSetRecoilState(checkedCartRooms);
  const [isSelectAll, setIsSelectAll] = useState(true);

  // 최초 및 재입장 시 전체 선택 상태 기본값
  useEffect(() => {
    setAllCheked(accommodations, setCheckedRooms);
  }, [accommodations, setCheckedRooms]);

  return (
    <>
      <style.SelectCartListWrapper>
        <CartListHeader accommodations={accommodations} isSelectAll={isSelectAll} setIsSelectAll={setIsSelectAll} />

        {accommodations.length ? (
          <CartRoom accommodations={accommodations} setIsSelectAll={setIsSelectAll} />
        ) : (
          <EmptyCart />
        )}
      </style.SelectCartListWrapper>
    </>
  );
};

export default SelectCartList;
