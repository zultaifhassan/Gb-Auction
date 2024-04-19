import React from "react";
import { Star } from "react-feather";
import CountDown from "../../../components/Countdown/CountDown";

const Vehicle = () => {
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
          <div className="product-one-home">
            <div className="image-icon-hammer">
              <div className="star-watch">
                <Star />
              </div>
              <img src="/Images/car1.jpg" alt="" />
              <span>
                <img src="/Images/hammer.png" alt="" />
              </span>
            </div>
            <div className="product-name">
              <h2>2019 Nissan Versa, S</h2>
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
                    <h5>$1500.00</h5>
                  </span>
                </div>
              </div>
              <div className="timer-total-bids">
                <div className="days-hours-min">
                  <CountDown targetDate="2024-04-20T00:00:00" />
                </div>
                <div className="total-numer-bids">
                  <h3>30 Bids</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="product-one-home">
            <div className="image-icon-hammer">
              <div className="star-watch">
                <Star />
              </div>
              <img src="/Images/car1.jpg" alt="" />
              <span>
                <img src="/Images/hammer.png" alt="" />
              </span>
            </div>
            <div className="product-name">
              <h2>2019 Nissan Versa, S</h2>
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
                    <h5>$1500.00</h5>
                  </span>
                </div>
              </div>
              <div className="timer-total-bids">
                <div className="days-hours-min">
                  <CountDown targetDate="2024-05-01T00:00:00" />
                </div>
                <div className="total-numer-bids">
                  <h3>30 Bids</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="product-one-home">
            <div className="image-icon-hammer">
              <div className="star-watch">
                <Star />
              </div>
              <img src="/Images/car1.jpg" alt="" />
              <span>
                <img src="/Images/hammer.png" alt="" />
              </span>
            </div>
            <div className="product-name">
              <h2>2019 Nissan Versa, S</h2>
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
                    <h5>$1500.00</h5>
                  </span>
                </div>
              </div>
              <div className="timer-total-bids">
                <div className="days-hours-min">
                  <CountDown targetDate="2024-04-03T00:00:00" />
                </div>
                <div className="total-numer-bids">
                  <h3>30 Bids</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
