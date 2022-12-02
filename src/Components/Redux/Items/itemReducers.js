import { items } from "../Shared/items";
const initialItems = {
  items,
};

export const itemsReducer = (state = initialItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
