import React from "react";
import "./Dashboard.css";
import SideBar from "../../components/sideBar/SideBar";
// import DashboardMain from "../../components/dashboardMain/DashboardMain";

function Dashboard() {
  return (
    <div >
      <div className="dashbord-main">
      <SideBar />
      </div>
    </div>
  );
}

export default Dashboard;
