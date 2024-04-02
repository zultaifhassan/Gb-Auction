import React from "react";
import './Auction.css'
import Vehicle from '../Home/Vehicle/Vehicle'
import Jewelery from '../Home/Jewelery/Jewelery'
import RealState from "../Home/RealState/RealState";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Auction = () => {
  return (
    <>
    <Navbar />
    <div className="max-width auction-page-first">
      <Vehicle />
      <Jewelery />
      <RealState />
    </div>
    <Footer />
    </>
  );
};

export default Auction;
