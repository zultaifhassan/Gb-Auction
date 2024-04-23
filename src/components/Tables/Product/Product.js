import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct, clearState
} from "../../../Features/product/productSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast} from "react-toastify"
import "./producttable.css";


const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error, delSuccess, delError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    if(delSuccess) {
      console.log('here')
      toast.success("Product Deleted Successfully !", {
        position: "top-right",
      });
      dispatch(clearState());
    }
    if(delError) {
      toast.error(delError, {
        position: "top-right",
      });
    }
  }, [dispatch, delSuccess, delError]);


  if (!Array.isArray(products)) {
    return <div className="max-width">No products available</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="product-table">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr>
              <td>
                <img src={item.image} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>
                <AiTwotoneDelete fontSize={25} onClick={()=> dispatch(deleteProduct({ id :item._id}))} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
