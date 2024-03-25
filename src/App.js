import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Auction from "./Pages/Auction.js/Auction"
import './App.css'
import Signup from "./Pages/Signup/Signup";
import Subscribe from "./components/Suscribe/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
