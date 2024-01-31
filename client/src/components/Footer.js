import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer" className="position-relative">
        <footer className="main-footer">
          <div className="row">
            <div className="col-sm-3">
              <div className="main-logo">
                <img src="./Images/logo.svg" alt="" />
              </div>
              <div className="address py-3">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </div>
              <div className="contact">
                <div className="mail">
                  <Link to={"mailto:support@example.com"}>
                    support@example.com
                  </Link>
                </div>
                <div className="mobile">
                  <Link to={"+(084) 456-0789"}>+(084) 456-0789</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-8">
                  <div id="footer-product-menu" className="footer-menu">
                    <div className="footer-heading">
                      <h2>PRODUCTS</h2>
                    </div>
                    <div className="menu-lists">
                      <ul className="footer-menu-ul">
                        <li className="menu-list">
                          <Link to={""}>Burger</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>King Delight Products</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>crispy flavors</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>BreakFast Products</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>Kids Menu</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}> Desserts</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}> Sauces</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer-menu" id="footer-quick-link">
                    <div className="footer-heading">
                      <h2>Quick Links</h2>
                    </div>
                    <div className="menu-lists">
                      <ul className="footer-menu-ul">
                        <li className="menu-list">
                          <Link to={""}>Home</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>Menu</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>About</Link>
                        </li>
                        <li className="menu-list">
                          <Link to={""}>Contacts</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-menu" id="footer-quick-link">
                <div className="footer-heading">
                  <h2>Opening Hours</h2>
                </div>
                <div className="timing">
                  <div className="footer-days">
                    Monday - Friday: <span className="time">8am - 4pm</span>{" "}
                  </div>
                  <div className="footer-days">
                    Saturday: <span className="time">8am - 12am</span>
                  </div>
                </div>
                <div className="menu-lists">
                  <ul className="footer-icons mt-3">
                    <li className="icon-list">
                      <Link to={""}>
                        <i class="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="icon-list">
                      <Link to={""}>
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="icon-list">
                      <Link to={""}>
                        <i class="fa-brands fa-square-instagram"></i>
                      </Link>
                    </li>
                    <li className="icon-list">
                      <Link to={""}>
                        <i class="fa-brands fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <div className="copyrights py-4 text-center">
        Copyright © 2023 Fazfood. All rights reserved
      </div>
    </>
  );
};

export default Footer;
