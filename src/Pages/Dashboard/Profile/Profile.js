import React from "react";
import "./Profile.css";
import { Edit2 } from "react-feather";

const Profile = () => {
  return (
    <div className="profile-main-div">
      <div className="head-edit-dash">
        <h1>Personal Details</h1>
        <button><Edit2 fontSize={10} /> Edit</button>
      </div>
      <div className="personal-details-div">
        <h2>Name</h2>
        <h2>Zultaif hassan</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Date of Birth</h2>
        <h2>15-03-1974</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Email Address</h2>
        <h2>zultaifhassan@gmail.com</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Phone</h2>
        <h2>+92 3495419344</h2>
      </div>
      <div className="personal-details-mail">
        <h2>CNIC Number</h2>
        <h2>7150199240457</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Address</h2>
        <h2>Amphary Danyore, Gilgit</h2>
      </div>
    </div>
  );
};

export default Profile;
