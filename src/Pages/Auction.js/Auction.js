import React from "react";
import './Auction.css'
import Vehicle from '../Home/Vehicle/Vehicle'
import Jewelery from '../Home/Jewelery/Jewelery'
import RealState from "../Home/RealState/RealState";

const Auction = () => {
  return (
    <div className="max-width auction-page-first">
      <Vehicle />
      <Jewelery />
      <RealState />
    </div>
  );
};

export default Auction;
