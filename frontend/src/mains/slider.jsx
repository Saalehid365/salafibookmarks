import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={2}
      autoplay={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="my-24 px-24 w-5/6 flex justify-between "
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 50, modifier: 2.5 }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: "swiper-btn-next",
        prevEl: "swiper-btn-prev",
        clickable: true,
      }}
    >
      <SwiperSlide className=" ">
        <img src={slide1} className="sm:h-40 sm:w-72"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className="sm:h-40 sm:w-40"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className="sm:h-40 sm:w-40"></img>
      </SwiperSlide>
      <SwiperSlide className="">
        <img src={slide1} className="sm:h-40 sm:w-40"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className="sm:h-40 sm:w-40"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className="sm:h-40 sm:w-40"></img>
      </SwiperSlide>
      <div className="flex justify-between absolute top-52   z-20 w-full sm:top-0 sm:relative sm:justify-evenly">
        <div>
          <FaArrowAltCircleLeft className="swiper-btn-prev h-12 w-12 opacity-10 hover:opacity-70 sm:w-6 sm:h-6" />
        </div>
        <div>
          <FaArrowAltCircleRight className="swiper-btn-next h-12 w-12 opacity-10 hover:opacity-70 sm:w-6 sm:h-6" />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
