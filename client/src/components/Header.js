import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header  d-flex align-items-center justify-content-between p-3">
      <div className="header-menu d-flex align-items-center " id="left-header">
        <div className="bars me-3 ">
          <div className="bar-line" id="f-line"></div>
          <div className="bar-line" id="s-line"></div>
          <div className="bar-line" id="t-line"></div>
        </div>
        <div className="site-logo">
          <img src="./Images/logo.svg" alt="" />
        </div>
      </div>
      <div id="right-header">
        <div className="sec-header d-flex align-items-center ">
          <div className="searches  ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span className="search"> SEARCH</span>
          </div>
          <div className="order-btn hovers">ORDER NOW</div>
          <div className="position-relative">
            <div className="cart-btn hovers ">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
