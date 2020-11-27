import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = (event) => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div onClick={scrollToTop} className="footer__header">
        <p>Back to top</p>
      </div>
      <div className="footer__body">
        <div className="footer__bodyItems">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Investor relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div className="footer__bodyItems">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an affliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hubs</p>
        </div>
        <div className="footer__bodyItems">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency converter</p>
        </div>
        <div className="footer__bodyItems">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content & Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer__bottom">
        <Link to="/">
          <img
            className="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            onClick={scrollToTop}
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
