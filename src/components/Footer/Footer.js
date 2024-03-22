import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-footer">
      <div className="max-width bottom-footer-inner">
        <div className="footer-logo">
          <Link to="">GB Auction</Link>
        </div>
        <div className="footer-links">
          <div className="pages-links">
            <h2>Pages</h2>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Auction</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="pages-links">
            <h2></h2>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
