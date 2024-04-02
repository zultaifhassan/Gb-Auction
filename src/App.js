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
        <Route path="/dashboard" element={<Dashlayout />}>
          <Route path="dash-main" element={<Dashboard/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="mybids" element={<Mybids />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
