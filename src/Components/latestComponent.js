import React from "react";
import "./Style/latest.css";
import { Item } from "./SubComponents/item";
import { useSelector } from "react-redux";
export default function LatestItems() {
  const latestObj = useSelector((state) => state.latest);
  return (
    <div className="items-wrapper">
      <h1>Latest</h1>
      <div className="items">
        {latestObj.items.map((item, id) => {
          return <Item key={id} item={item} />;
        })}
      </div>
    </div>
  );
}
