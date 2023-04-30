import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { feedbackCustomers } from "./feedback";

const Sliderfeedback = () => {
  return (
    <div className="hidden sm:inline  ">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        className=""
      >
        {feedbackCustomers.map((feed) => (
          <SwiperSlide className="bg-greenSpring flex flex-col items-center justify-center h-full pt-12">
            <p className="mt-10 px-12 text-md w-96 mx-auto">{feed.feedinfo}</p>
            <h2 className="pb-6 mt-6">{feed.name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliderfeedback;
