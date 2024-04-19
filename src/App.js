import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Auction from "./Pages/Auction.js/Auction"
import './App.css'
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Dashlayout from "./Pages/Dashboard/dashlayout/Dashlayout";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Mybids from "./Pages/Dashboard/Mybids/Mybids";
import Product from "./Pages/Productpage/Product";
import Admin from "./Pages/Admindashboard/Admin";
import ConatctTable from "./components/Tables/Contact/ConatctTable";
import DashboardMain from "./Pages/Admindashboard/DashboardMain/DashboardMain";
import UserTable from "./components/Tables/User/UserTable";
import ProductForm from "./Pages/Admindashboard/ProductForm/ProductForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/dashboard" element={<Dashlayout />}>
          <Route path="dash-main" element={<Dashboard/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="mybids" element={<Mybids />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-main" element={<DashboardMain />} />
          <Route path="contact-table" element={<ConatctTable />} />
          <Route path="users-table" element={<UserTable />} />
          <Route path="product-form" element={<ProductForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
