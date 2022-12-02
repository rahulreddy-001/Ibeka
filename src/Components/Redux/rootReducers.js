import { combineReducers } from "redux";
import { itemsReducer } from "./Items/itemReducers";
import { latestReducer } from "./latest/latestReducers";
import { cartReducer } from "./Cart/cartReducers";
import { likedReducer } from "./Liked/likedReducers";

export const rootReducers = combineReducers({
  items: itemsReducer,
  latest: latestReducer,
  cart: cartReducer,
  liked: likedReducer,
});
