import React from "react";
import BookCard from "./BookCard";
import Categories from "./Categories";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
