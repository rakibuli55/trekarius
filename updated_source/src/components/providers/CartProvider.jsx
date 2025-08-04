import { CartContext } from "@/context";
import useGetAllProduct from "@/hooks/useGetAllProduct";
import { useEffect, useReducer } from "react";
import cartReducer from "../reducers/CartReducers";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { cartItems: [] };
};

// Initial State
const initialState = getCartFromLocalStorage();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { allProducts, allProductsLoading } = useGetAllProduct();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (!allProductsLoading && allProducts?.data?.length === 0) {
      // Clear cart from localStorage
      localStorage.removeItem("cart");
      dispatch({
        type: "RESET_CART",
      });
    }
    if (!allProductsLoading && allProducts?.data?.length > 0) {
      const updatedCart = {
        cartItems: allProducts.data,
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: "RESET_CART_WITH_PRODUCTS", payload: allProducts.data });
    }
  }, [allProducts, allProductsLoading]);

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };
  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  const subTotalValue = state.cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
        addItem,
        removeItem,
        subTotalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
