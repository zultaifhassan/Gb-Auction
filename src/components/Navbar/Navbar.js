import React, { useState } from "react";
import "./Navbar.css";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    console.log("clicked")
  };
  return (
    <div className="top-navbar">
      <nav className="max-width">
        <div className="top-navbar-right">
          <Link to="/">GB Auctions</Link>
          <div className="togggle-bar" onClick={toggleNavbar}>
            <Menu fontSize={50} />
          </div>
        </div>
        <div className={`top-navbar-center ${showNavbar && "active"}`}>
          <Link to="/">Home</Link>
          <Link to="/auction">Auction</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="top-navbar-left">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
