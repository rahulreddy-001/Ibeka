import "../Style/item.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToLiked,
  removeItemFromLiked,
  addItemToCart,
  removeItemFromCart,
} from "../Redux/index";
import React from "react";

export const Item = ({ item }) => {
  const likedObj = useSelector((state) => state.liked);
  const cartObj = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="item">
      <img src={item.img} className="image" alt={item.version} />
      <div className="des">
        <div className="name">{item.name}</div>
        <div className="ver">{item.version}</div>
        <div className="price">MRP Rs {item.price}/-</div>
      </div>
      <div className="cart-like">
        {cartObj.cartItems.includes(item.version) ? (
          <Button
            variant="contained"
            style={{
              padding: "5px 10px",
              color: "grey",
              background: "white",
              minWidth: "150px",
            }}
            onClick={() => dispatch(removeItemFromCart(item.version))}
          >
            <strong>REMOVE FROM CART</strong>
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{
              padding: "5px 10px",
              color: "white",
              background: "black",
              minWidth: "150px",
            }}
            onClick={() => dispatch(addItemToCart(item.version))}
          >
            <strong>ADD TO CART</strong>
          </Button>
        )}
        {likedObj.likedItems.includes(item.version) ? (
          <FavoriteIcon
            className="icon"
            sx={{ fontSize: 30, margin: 0, pading: 0 }}
            onClick={() => dispatch(removeItemFromLiked(item.version))}
          />
        ) : (
          <FavoriteBorderIcon
            className="icon"
            sx={{ fontSize: 30, margin: 0, pading: 0 }}
            onClick={() => dispatch(addItemToLiked(item.version))}
          />
        )}
      </div>
    </div>
  );
};
