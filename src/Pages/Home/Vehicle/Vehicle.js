import React, { useEffect, useState } from "react";
import { Star } from "react-feather";
import CountDown from "../../../components/Countdown/CountDown";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Features/product/productSlice";

const Vehicle = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!Array.isArray(products)) {
    return <div className="max-width">No products available</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="max-width home-page-second">
        <div className="head-vehicles">
          <div className="veh-head-title">
            <h1>Vehicles</h1>
            <p>We offer affordable Vehicles</p>
          </div>
          <div className="veh-head-button">
            <button>View All</button>
          </div>
        </div>
        <div className="product-boxes">
          {products.map((item) => {
            return (
              <div className="product-one-home">
                <div className="image-icon-hammer">
                  <div className="star-watch">
                    <Star />
                  </div>
                  <img src={item.image} alt="" />
                  <span>
                    <img src="/Images/hammer.png" alt="" />
                  </span>
                </div>
                <div className="product-name">
                  <h2>{item.title}</h2>
                  <div className="bidding-information">
                    <div className="current-biding">
                      <img src="/Images/hammer.png" alt="" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" alt="" />
                      <span>
                        <p>Buy Now</p>
                        <h5>${item.price}</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                    <CountDown targetDate={item.date} id={item?._id}/>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
