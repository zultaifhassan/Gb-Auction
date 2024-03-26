import React, { useState, useEffect } from "react";
import "./Home.css";
import Review from "../../components/Review/Review";
import Category from "../../components/CategoriesSlider/Category";
import Loader from "../../components/Loader/Loader";
import { Star } from "react-feather";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="max-width home-page-content">
            <div className="homepage-left">
              <h1>
                Find Your <br /> Next Deal!
              </h1>
              <p>
                Online Auction is where everyone goes to shop, sell and give,
                while discovering variety and affordability.
              </p>
              <button>Get Started</button>
            </div>
            <div className="homepage-right">
              <img src="/Images/home-main.jpg" alt="" />
            </div>
          </div>
          <Category />
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
                      <img src="/Images/hammer.png" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/">
                    Submit A Bid
                  </Link>
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
                      <img src="/Images/hammer.png" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/">
                    Submit A Bid
                  </Link>
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
                      <img src="/Images/hammer.png" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/">
                    Submit A Bid
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Review />
        </div>
      )}
    </>
  );
};

export default Home;
