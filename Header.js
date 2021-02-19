import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      {/* logo */}
      <Link to="/login">
        <img
          className="header__logo"
          src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
          alt="img"
        />
      </Link>
      {/* search  */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 4 links  */}
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionOne">Hello </span>
            <span className="header__optionTwo">Sign In </span>
          </div>
        </Link>

        <Link to="/">
          <div className="header__option">
            <span className="header__optionOne">Return </span>
            <span className="header__optionTwo">& Order </span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionOne">Your </span>
            <span className="header__optionTwo">Prime </span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
