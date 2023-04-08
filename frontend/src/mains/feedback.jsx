import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Feedback } from "./feedback.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaAudible, FaStar, FaUser } from "react-icons/fa";

const Sliderfeedback = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        className="w-96 h-44 bg-gray-200 rounded-lg flex items-center"
      >
        {Feedback.map((feed) => (
          <SwiperSlide className="flex h-full text-gray-700">
            <div className="flex items-center justify-center mt-8">
              <FaUser className="h-16 w-16  rounded-full mr-12  text-yellow-700" />
              <p className="text-2xl">{feed.name}</p>
            </div>
            <div className="flex justify-evenly items-center mt-4 text-bold text-gray-700">
              <FaAudible />
              <p className="text-xl letter">"{feed.feedback}"</p>
              <FaAudible />
            </div>
            <div className="flex  justify-evenly mt-2  ">
              <div className="flex w-40 justify-evenly">
                <FaStar
                  style={{ color: feed.stars >= 1 ? "rgb(253,253,150)" : "" }}
                />
                <FaStar
                  style={{ color: feed.stars >= 2 ? "rgb(253,253,150)" : "" }}
                />
                <FaStar
                  style={{ color: feed.stars >= 3 ? "rgb(253,253,150)" : "" }}
                />
                <FaStar
                  style={{ color: feed.stars >= 4 ? "rgb(253,253,150)" : "" }}
                />
                <FaStar
                  style={{ color: feed.stars >= 5 ? "rgb(253,253,150)" : "" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliderfeedback;
