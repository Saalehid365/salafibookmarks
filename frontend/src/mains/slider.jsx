import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    >
      <SwiperSlide>
        <img src={slide1} className="p-6"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className="p-6"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className="p-6"></img>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;