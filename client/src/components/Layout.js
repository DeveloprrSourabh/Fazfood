import React from "react";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";
const Layout = ({ children, admin }) => {
  return (
    <>
      <Header />
      <Toaster />
      {children}
      {admin ? "" : <Footer />}
    </>
  );
};

export default Layout;
