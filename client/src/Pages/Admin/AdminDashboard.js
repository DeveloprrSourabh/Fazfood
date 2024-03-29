import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <>
      <Layout admin>
        <section id="admin">
          <div className="admin-dashboard">
            <div className="row admin-row">
              <div className="col-sm-3">
                <div className="menu-list">
                  <ul className="dashboard-list-item">
                    <li
                      className={`main-list ${
                        path == "/dashboard/admin" ? "active" : ""
                      }`}
                    >
                      <div className="menu-item">
                        <Link to={"../profile"} className="list-item-link">
                          Profile
                        </Link>
                      </div>
                    </li>
                    <li className="main-list">
                      <div className="menu-item">
                        <Link to={""} className="list-item-link">
                          Add Product
                        </Link>
                      </div>
                    </li>
                    <li className="main-list">
                      <div className="menu-item">
                        <Link to={""} className="list-item-link">
                          All Products
                        </Link>
                      </div>
                    </li>
                    <li className="main-list">
                      <div className="menu-item">
                        <Link to={""} className="list-item-link">
                          Add Category
                        </Link>
                      </div>
                    </li>
                    <li className="main-list">
                      <div className="menu-item">
                        <Link to={""} className="list-item-link">
                          All Category
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9"></div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AdminDashboard;
