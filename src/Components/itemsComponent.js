import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style/items.css";
function Items() {
  const itemsObj = useSelector((state) => state.items);
  const LatestItems = ({ item }) => {
    let props = item;
    return (
      <Link to={`/items/${props.name}`}>
        <Card
          sx={{
            minWidth: 230,
            minHeight: 400,
            maxHeight: 400,
            borderRadius: 0,
            margin: 1,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="200"
              image={props.pic}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  };

  return (
    <div className="wrapper">
      <h1>Categories</h1>
      <div className="wrapper-items">
        {itemsObj.items.map((item, id) => {
          return (
            <div key={id}>
              <LatestItems item={item} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
