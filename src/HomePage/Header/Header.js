import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  const truncate = (email, n = 6) => {
    const index = email?.indexOf("@");
    return email?.substr(0, index);
  };

  const windowTop = (event) => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="search">
        <input type="text" className="searchBar" />
        <SearchIcon className="searchIcon" />
      </div>

      {/* Sign in option */}
      <div className="headerNav">
        <Link to={!user && "/login"} className="headerLink">
          <div onClick={login} className="option">
            <span className="optionOne">Hello {truncate(user?.email)} </span>
            <span className="optionTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/orders" className="headerLink">
          <div className="option">
            <span className="optionOne">Returns</span>
            <span className="optionTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="option">
            <span className="optionOne">Your</span>
            <span className="optionTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="headerLink" onClick={windowTop}>
        <div className="basket">
          <ShoppingBasketIcon />
          <span className="optionTwo ordersCount">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
