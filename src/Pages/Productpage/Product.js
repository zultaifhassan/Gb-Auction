import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Product.css";
import CountDown from "../../components/Countdown/CountDown";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../Features/product/productSlice";


const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, getLoading, getError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById({ id }));
  }, [dispatch, id]);

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
            <img src="/Images/jew1.jpg" alt="" />
          </div>
          <div className="productpage-title">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="price-detail">
              <h2>Current Price:</h2>
              <span>${product.price}</span>
            </div>
            <div className="ending-detail">
              <h2>Auction End In</h2>
              <div className="end-date-product">
                <CountDown targetDate={product.date} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
