import React from "react";
import "./Login.css";
import { User, Lock } from "react-feather";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-page-outer">
        <div class="max-width">
          <div className="login-page-inner">
            <div className="login-account">
              <form>
                <h1>Get Started Now</h1>
                <p>We're happy you're here!</p>
                <h2>Login To GB Auction</h2>
                <div className="login-inputs">
                  <span>
                    <User />
                    <input type="email" placeholder="Enter your email" />
                  </span>
                  <span>
                    <Lock />
                    <input type="password" placeholder="Enter password" />
                  </span>
                  <button>Login</button>
                </div>
              </form>
              <div className="login-left-side">
                <div className="login-left-text">
                  <h1>ALREADY HAVE AN ACCOUNT?</h1>
                  <Link to="/signup">
                    <button>Signup</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
