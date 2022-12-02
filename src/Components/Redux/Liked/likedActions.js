import { ADD_ITEM_TO_LIKED, REMOVE_ITEM_FROM_LIKED } from "./likedActionTypes";

export const addItemToLiked = (itemId) => {
  return {
    type: ADD_ITEM_TO_LIKED,
    payload: itemId,
  };
};
export const removeItemFromLiked = (itemId) => {
  return {
    type: REMOVE_ITEM_FROM_LIKED,
    payload: itemId,
  };
};
