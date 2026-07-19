import React from "react";
import "./ImageSlider1.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider1 = ({
  data,
  slidesPerView = 1,
  navigation = true,
  pagination = true,
  autoplay = true,
  loop = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000 } : false}
      loop={loop}
      spaceBetween={20}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="glass-card">
            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>Explore More</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider1;