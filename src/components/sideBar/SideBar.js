import React, { useState } from "react";
import "./style.css";
import { MdOutlineDashboard } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";
import { MdNetworkPing } from "react-icons/md";
import { GiThrowingBall } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCleanHands } from "react-icons/md";

function SideBar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
      <div className="dash-sidebar">
        <div className="sidebar-inner">
          <div className="image-and-name">
            <img src="/images/user.jpg" alt="" />
            <h1>Aliyas Muhammad</h1>
            <p>aliyas@gmail.com</p>
          </div>

          <ul className="dashboard-elements">
            <li className={activeLink === 'home' ? 'active' : ''}>
              <Link to="dash-main" onClick={() => handleLinkClick('home')}>
                <MdOutlineDashboard className="icons" />
                Dashboard
              </Link>
            </li>
            <li className={activeLink === 'profile' ? 'active' : ''}>
              <Link to="profile" onClick={() => handleLinkClick('profile')}>
                <GiRamProfile className="icons" />
                Personal Profile
              </Link>
            </li>
            <li className={activeLink === 'myBids' ? 'active' : ''}>
              <Link to="mybids" onClick={() => handleLinkClick('myBids')}>
                <MdNetworkPing className="icons" />
                My Bids
              </Link>
            </li>
            <li>
              <Link>
                <GiThrowingBall className="icons" />
                Wining Bids
              </Link>
            </li>
            <li>
              <Link>
                <AiFillAlert className="icons" />
                My Alerts
              </Link>
            </li>
            <li>
              <Link>
                <FaRegStar className="icons" />
                My Favorites
              </Link>
            </li>
            <li>
              <Link>
                <MdCleanHands className="icons" />
                Referrals
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default SideBar;
