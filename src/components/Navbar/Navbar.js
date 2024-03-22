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
          <Link href="/">GB Auctions</Link>
          <div className="togggle-bar" onClick={toggleNavbar}>
            <Menu fontSize={50} />
          </div>
        </div>
        <div className={`top-navbar-center ${showNavbar && "active"}`}>
          <Link href="/">Home</Link>
          <Link href="/">Auction</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="top-navbar-left">
          <Link href="/">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
