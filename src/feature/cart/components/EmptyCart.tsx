import { EmptyCartWrapper, EmptyCartIcon } from "../styles/emptyCart";

const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
      <EmptyCartIcon />

      <strong className="empty-strong">장바구니에 담긴 상품이 없습니다.</strong>
      <span className="empty-span">원하는 상품을 담아보세요.</span>

      <button
        onClick={() => {
          console.log("홈으로 이동");
        }}
        className="empty-home-btn"
      >
        홈으로 이동하기
      </button>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
