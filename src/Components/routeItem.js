import React from "react";
import { useParams } from "react-router-dom";
import { Item } from "./SubComponents/item";
import { useSelector } from "react-redux";
function RouteItem() {
  let { id } = useParams();
  id = id.toLowerCase();
  const itemsObj = useSelector((state) => state.latest);
  const items = itemsObj.items.filter((item) => item.category.includes(id));
  return (
    <div className="items-wrapper">
      <h1>{id.toUpperCase()}</h1>
      <div className="items">
        {items.map((item, id) => {
          return <Item key={id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default RouteItem;
