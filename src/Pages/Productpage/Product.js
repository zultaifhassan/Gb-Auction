import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Product.css";
import CountDown from "../../components/Countdown/CountDown";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="max-width product-detail-outer">
        <h2>Product Detail</h2>
        <div className="product-detail-inner">
          <div className="product-imageside">
            <img src="/Images/jew1.jpg" alt="" />
          </div>
          <div className="productpage-title">
            <h1>Diamond Ring</h1>
              <p>A diamond ring symbolizes enduring love and commitment, adorned with a timeless elegance that captivates hearts. </p>
            <div className="price-detail">
              <h2>Current Price:</h2>
              <span>$600</span>
            </div>
            <div className="ending-detail">
              <h2>Auction End In</h2>
              <CountDown targetDate="2024-04-20T00:00:00" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
