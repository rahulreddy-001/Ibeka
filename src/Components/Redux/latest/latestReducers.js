import { items } from "../Shared/latest";
const initialItems = {
  items: items,
};

export const latestReducer = (state = initialItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
