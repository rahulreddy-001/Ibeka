import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartActionTypes";

const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};
