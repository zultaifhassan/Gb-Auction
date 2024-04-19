import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, productSlice } from "../../../Features/product/productSlice";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [category, setCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const { success, loading, error } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.login);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const image = new Image();

        image.onload = () => {
          const { width, height } = image;
          const minWidth = 100;
          const minHeight = 100;
          const maxWidth = 1500;
          const maxHeight = 1500;
          if (
            width >= minWidth &&
            height >= minHeight &&
            width <= maxWidth &&
            height <= maxHeight
          ) {
            setSelectedImage(file);
            setShowImage(reader.result);
            setErrorMessage("");
          } else {
            setErrorMessage(
              "Image size is not within the allowed limits(100-701 x 100-445). Please choose an image with appropriate dimensions."
            );
            setSelectedImage(null);
            setShowImage(null);
          }
        };

        image.src = reader.result;
      };

      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please select an image");
    }
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleCreateProduct = (values) => {
    if (category) {
      const apiData = new FormData();
      apiData.append("name", values.name);
      apiData.append("price", values.price);
      apiData.append("description", values.description);

      dispatch(createProduct({ token: user?.token, data: apiData }));
      console.log("cliscked")
    }
  };

  useEffect(() => {
    if (success) {
      // dispatch(clearState());
      // navigate("/seller/products");
    }
    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: true,
      });
      // dispatch(clearState());
    }
  }, [error, success, dispatch]);

  return (
    <div className="product-form-outer">
      <h1>Product Details</h1>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="product-form-inner">
          <label>Product Name</label>
          <input type="text" placeholder="Product Name" {...register("name", { required: true })} />
        </div>
        <div className="price-category">
          <div className="product-form-inner">
            <label>Price</label>
            <input type="number" placeholder="Price" {...register("price", { required: true })} />
          </div>
          <div className="product-form-inner">
            <label>Category</label>
            <select>
              <option value="" id="option" disabled>
                Select Category
              </option>
              <option value="vehicles">Vehicles</option>
              <option value="jewelery">Jewelery</option>
              <option value="real state">Real State</option>
            </select>
          </div>
        </div>
        <div className="product-form-inner">
          <label>Description</label>
          <input type="text" placeholder="Description" {...register("description", { required: true })} />
        </div>
        <div className="product-form-inner">
          <label>Picture</label>
          <input type="file" />
        </div>
        <button type="submit">{loading? "Loading..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
