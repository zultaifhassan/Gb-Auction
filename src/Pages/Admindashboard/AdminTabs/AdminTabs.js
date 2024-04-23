import React, { useState} from "react";
import UserTable from "../../../components/Tables/User/UserTable"
import EmailTab from "../../../components/Tables/Email/EmailTab";

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="user-tabs">
        <h1>Products Detail</h1>
        <div className="tabs">
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? "active" : ""}>
            Users List
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? "active" : ""}>
            Email List
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <UserTable />
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <EmailTab />
            </div>
          )}
        </div>
      </div>
  );
};

export default AdminTabs;
