import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../Context/Auth";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [auth, setAuth] = useAuth();
  const [category, setCategory] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  let body = document.getElementById("root");
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   setUserName(auth?.user?.name);
  // }, [auth?.user?.name]);

  return (
    <header className="main-header  d-flex align-items-center justify-content-between p-3">
      <div className="header-menu d-flex align-items-center " id="left-header">
        <div
          className="bars me-3 "
          onClick={() => {
            setSidebar(true);
            body.classList.add("shown");
          }}
        >
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
          <div className="header-login">
            {auth?.user != null ? (
              <div className="d-flex gap-4  align-items-center">
                <Link className="" to={"/"}>
                  <div className="searches"> {auth?.user?.name}</div>
                </Link>
                <div
                  className="order-btn hovers"
                  onClick={() => {
                    localStorage.setItem("auth", "");
                    setAuth(null);
                    // setUserName("");
                  }}
                >
                  Logout
                </div>
              </div>
            ) : (
              <>
                <Link className="" to={"/login"}>
                  <span className="search"> Login</span>
                </Link>
                <Link className="" to={"/register"}>
                  <span className="search"> Register</span>
                </Link>
              </>
            )}
          </div>
          <div className="order-btn hovers">ORDER NOW</div>
          <div className="position-relative">
            <div className="cart-btn hovers ">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`side-header ${sidebar ? "active" : ""}`}>
        <div className="side-header-menu">
          <div className="side-header-img">
            <img src="./Images/logo.svg" alt="" />
          </div>
          <div
            className="cross"
            onClick={() => {
              setSidebar(false);
              body.classList.remove("shown");
            }}
          >
            x
          </div>
          <div className="side-main-menu">
            <div className="side-heading d-flex gap-4">
              <h2
                onClick={() => {
                  setMenu(true);
                  setCategory(false);
                }}
                className={` ${menu ? "active" : ""}`}
              >
                Main Menu
              </h2>
              <h2
                onClick={() => {
                  setMenu(false);
                  setCategory(true);
                }}
                className={` ${category ? "active" : ""}`}
              >
                Categories
              </h2>
            </div>
            {menu ? (
              <ul className="side-header-ul " id="menus">
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Home</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>About</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Contact Us</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Blog</span> <span> {">"} </span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Shop</span> <span> {">"} </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="side-header-ul" id="menus">
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Burger</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>ANother</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Same</span> <span>{">"}</span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Anything</span> <span> {">"} </span>
                  </Link>
                </li>
                <li className="side-menu-list">
                  <Link
                    className="d-flex justify-content-between align-items-center"
                    to={""}
                  >
                    <span>Butter</span> <span> {">"} </span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
