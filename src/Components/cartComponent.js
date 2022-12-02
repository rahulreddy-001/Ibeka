import React from "react";
import "./Style/latest.css";
import { Item } from "./SubComponents/item";
import { useSelector } from "react-redux";
export default function CartItems() {
  const itemsObj = useSelector((state) => state.latest);
  const cartObj = useSelector((state) => state.cart);
  const cartItems = itemsObj.items.filter((item) =>
    cartObj.cartItems.includes(item.version)
  );
  return (
    <div className="items-wrapper">
      <h1>Cart</h1>
      <div className="items">
        {cartItems.map((item, id) => {
          return <Item key={id} item={item} />;
        })}
      </div>
    </div>
  );
}
