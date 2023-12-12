import * as style from "../styles/emptyCart";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <style.EmptyCartWrapper>
      <style.EmptyCartIcon />

      <style.EmptyCartText>
        <strong>장바구니에 담긴 상품이 없습니다.</strong>
        <span>원하는 상품을 담아보세요.</span>
      </style.EmptyCartText>

      <Link to="/">
        <style.EmptyHoneBtn>홈으로 이동하기</style.EmptyHoneBtn>
      </Link>
    </style.EmptyCartWrapper>
  );
};

export default EmptyCart;
