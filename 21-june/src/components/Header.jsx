import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./style.css";

const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <h1>Kart.io</h1>
      <div className="cartItemContainer">
        <PiShoppingCartSimpleBold />
        <div className="cart-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Header;
