import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ImageSlider.css";

const ImageSlider = ({
  data,
  slidesPerView = 1,
  navigation = false,
  pagination = false,
  // autoplay = false,
  loop = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={navigation}
      pagination={{ clickable: pagination }}
      // autoplay={
      //   autoplay
      //     ? {
      //         delay: 3000,
      //         disableOnInteraction: false,
      //       }
      //     : false
      // }
      slidesPerView={slidesPerView}
      loop={loop}
      spaceBetween={0}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slide">
            <img
              src={item.image}
              alt={item.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;