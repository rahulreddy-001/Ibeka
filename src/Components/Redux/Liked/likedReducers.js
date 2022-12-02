import { ADD_ITEM_TO_LIKED, REMOVE_ITEM_FROM_LIKED } from "./likedActionTypes";

const initialState = {
  likedItems: [],
};
export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_LIKED:
      return {
        ...state,
        likedItems: state.likedItems.concat(action.payload),
      };
    case REMOVE_ITEM_FROM_LIKED:
      return {
        ...state,
        likedItems: state.likedItems.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};
