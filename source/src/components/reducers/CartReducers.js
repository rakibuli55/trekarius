function cartReducer(state, action) {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "ADD_ITEM":
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if(existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
        }
      }
      return{
        ...state,
        cartItems:[...state.cartItems, {...action.payload}]
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}

export default cartReducer;
