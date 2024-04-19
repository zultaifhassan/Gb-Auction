import React, { useEffect } from "react";
import "../Login/Login.css";
import { User, Lock } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Features/auth/SignupSlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.signUp);

  const handleSignup = (values) => {
    dispatch(signup(values));
  };
  useEffect(() => {
    if (error) {
      toast.error("Error Occured", {
        position: "top-right",
      });
    }
    if (success) {
      toast.success("Signup successfully!", {
        position: "top-right",
      });
      navigate("/login");
    }
  }, [error, success, navigate]);

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });
  return (
    <>
      <Navbar />
      <div className="login-page-outer">
        <div class="max-width">
          <div className="login-page-inner">
            <ToastContainer />
            <div className="login-account">
              <form onSubmit={handleSubmit(handleSignup)}>
                {/* {error && <div className="error-message">{error}</div>} */}
                <h1>Create Account Now</h1>
                <p>We're happy you're here!</p>
                <h2>Signup To GB Auction</h2>
                <div className="login-inputs">
                  <span>
                    <User />
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      required
                      {...register("name", { required: true })}
                    />
                  </span>
                  <span>
                    <Lock />
                    <input
                      type="email"
                      placeholder="Enter your Mail"
                      required mi
                      {...register("email", { required: true })}
                    />
                  </span>
                  <span>
                    <Lock />
                    <input
                      type="password"
                      placeholder="Confrim password"
                      required
                      minLength={8}
                      {...register("password", { required: true })}
                    />
                  </span>
                  <button>{loading ? "Loading..." : "Signup"}</button>
                </div>
              </form>
              <div className="login-left-side">
                <div className="login-left-text">
                  <h1>ALREADY HAVE AN ACCOUNT?</h1>
                  <Link to="/login">
                    <button>Login</button>
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

export default Signup;
