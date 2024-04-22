import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../../Features/product/productSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
  
    
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = () => {
      dispatch(deleteProduct({id}));
  };
  
    if (!Array.isArray(products)) {
      return <div className="max-width">No products available</div>;
    }
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
    <div className="current-table contact-table">
      <h1>Contact Form Details</h1>
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
              <td><img src={item.image} /></td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td><AiTwotoneDelete fontSize={25} onClick={handleDelete()}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Product