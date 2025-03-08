import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "@/context";

function CartList() {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className="cartList">
      {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
