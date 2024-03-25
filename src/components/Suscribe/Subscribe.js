import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <>
      <div className="max-width subscribe-inner">
        <div className="subscribe-inner-content">
          <div className="subscribe-image-side">
            <img src="/Images/cat/newslater.png" alt="" />
          </div>
          <div className="subscribe-text-side">
            <h2>Suscribe to Bid Auction</h2>
            <h1>To Get Exclusive Benefits</h1>
            <span>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
