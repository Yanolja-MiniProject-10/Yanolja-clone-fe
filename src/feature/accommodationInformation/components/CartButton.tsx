import * as style from "../styles/cartButton";

const CartButton = ({ available, onClick }: { available: boolean; onClick?: () => void }) => {
  return available ? (
    <style.CartButton onClick={onClick}>
      <style.CartIcon />
    </style.CartButton>
  ) : (
    <style.DisableCartButton>
      <style.DisableCartIcon />
    </style.DisableCartButton>
  );
};

export default CartButton;
