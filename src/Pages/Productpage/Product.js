import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Product.css";
import CountDown from "../../components/Countdown/CountDown";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../Features/product/productSlice";
import { createBids } from "../../Features/bidding/biddingSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, getLoading, getError } = useSelector(
    (state) => state.products
  );
  const {user} = useSelector(state => state.login)
  const { success, loading, error} = useSelector((state) => state.bids)

  useEffect(() => {
    if(success) {
      toast.success("Bid Created Successfully", {
        position: "top-right",
      })
    }
    if(error) {
      toast.error(error, {
        position: "top-right",
      })
    }
    dispatch(fetchProductById({ id }));
    // dispatch(createBids());
  }, [dispatch, id]);
  const {register,handleSubmit} = useForm()

  if (getLoading) return <div>Loading...</div>;
  if (getError) return <div>Error: {getError}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <div className="max-width product-detail-outer">
        <h2>Product Detail</h2>
        <div className="product-detail-inner">
          <div className="product-imageside">
            <img src={product.image} alt="" />
          </div>
          <div className="productpage-title">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="price-detail">
              <h2>Current Price:</h2>
              <span>${product.price}</span>
            </div>
            <div className="ending-detail">
              <h2>This Auction End In</h2>
              <div className="end-date-product">
                <CountDown targetDate={product.date} />
              </div>
            </div>
            <div className="total-number-bids">
              <div className="active-bids">
                <h2>Active Bids</h2>
                <p>30 Bids</p>
              </div>
              <div className="highest-bids">
                <h2>Highest Bid</h2>
                <p>$ 400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-width bidding-form">
        <h2>Place Your Bid</h2>
        <form onSubmit={handleSubmit((values)=>{
          const data ={
            bid_price:values.bid_price,
            product: id,
            user_id: user.user._id
          }
          dispatch(createBids({token:user.token,data}))
        })}>
          <div className="form-group">
            <input type="text" placeholder="Enter Bid Amount" {...register('bid_price')}/>
          </div>
          <button type="submit" disabled={loading}>{loading? "Loadding..." : "Submit A Bid"}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
