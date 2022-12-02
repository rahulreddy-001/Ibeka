import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartActionTypes";

export const addItemToCart = (itemId) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: itemId,
  };
};
export const removeItemFromCart = (itemId) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemId,
  };
};
