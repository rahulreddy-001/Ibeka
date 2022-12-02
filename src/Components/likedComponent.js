import React from "react";
import "./Style/latest.css";
import { Item } from "./SubComponents/item";
import { useSelector } from "react-redux";
export default function LikedItems() {
  const itemsObj = useSelector((state) => state.latest);
  const likedObj = useSelector((state) => state.liked);
  const likedItems = itemsObj.items.filter((item) =>
    likedObj.likedItems.includes(item.version)
  );
  return (
    <div className="items-wrapper">
      <h1>Liked</h1>
      <div className="items">
        {likedItems.map((item, id) => {
          return <Item key={id} item={item} />;
        })}
      </div>
    </div>
  );
}
