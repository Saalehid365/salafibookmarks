import React from "react";
import MainImg from "../components/hero/mainImg";
import Title from "../components/hero/title";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] mt-20 w-full ">
      <Title />
      <MainImg />
    </div>
  );
};

export default Hero;
