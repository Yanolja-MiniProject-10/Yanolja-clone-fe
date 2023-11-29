import { EmptyCartWrapper, EmptyCartIcon, EmptyCartText, EmptyHoneBtn } from "../styles/emptyCart";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
      <EmptyCartIcon />

      <EmptyCartText>
        <strong>장바구니에 담긴 상품이 없습니다.</strong>
        <span>원하는 상품을 담아보세요.</span>
      </EmptyCartText>

      <Link to="/">
        <EmptyHoneBtn>홈으로 이동하기</EmptyHoneBtn>
      </Link>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
