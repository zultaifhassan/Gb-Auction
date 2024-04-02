import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star } from "react-feather";

const Vehicle = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const endTime = new Date('2024-12-31').getTime(); // Set your desired end time here
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
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
                      <span>{time.days}d :</span>
                      <span> {time.hours}11h :</span>
                      <span> {time.minutes}9m :</span>
                      <span> {time.seconds}0s</span>
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
    </div>
  )
}

export default Vehicle