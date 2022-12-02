import * as React from "react";
import "./Style/header.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        IBEKA
      </div>
      <div className="options">
        <SearchIcon
          className="icon"
          sx={{ fontSize: window.innerWidth < 500 ? 22 : 30 }}
        />
        <FavoriteIcon
          className="icon"
          sx={{ fontSize: window.innerWidth < 500 ? 22 : 30 }}
          onClick={() => navigate("/liked")}
        />

        <ShoppingCartIcon
          className="icon"
          sx={{ fontSize: window.innerWidth < 500 ? 22 : 30 }}
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
}
