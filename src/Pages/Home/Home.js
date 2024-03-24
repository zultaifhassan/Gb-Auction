import React from "react";
import "./Home.css";
import Review from '../../components/Review/Review'
import Category from "../../components/CategoriesSlider/Category";

const Home = () => {
  return (
    <>
    <div className="max-width home-page-content">
      <div className="homepage-left">
        <h1>Find Your <br /> Next Deal!</h1>
        <p>Online Auction is where everyone goes to shop, sell and give, while discovering variety and affordability.</p>
        <button>Get Started</button>
      </div>
      <div className="homepage-right">
        <img src="/Images/home-main.jpg" alt="" />
      </div>
    </div>
    <Category />
    <Review />
    </>
  );
};

export default Home;
