import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Category.css";

// import required modules
import { Navigation } from "swiper/modules";

const Category = () => {
  return (
    <div className="category-slider-outer">
      <div className="max-width categaory-outer-slider">
        <div className="review-slider-head">
          <h1>Categories</h1>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}>
          <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="category-slider-inner">
              <img src="/Images/user.jpg" alt="" />
              <h1>Vehicles</h1>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
