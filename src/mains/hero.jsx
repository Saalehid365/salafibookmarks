import React from "react";
import MainImg from "../components/hero/mainImg";
import SideImg from "../components/hero/sideImg";
import Title from "../components/hero/title";
import TitleText from "../components/hero/titleText";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] mt-20 w-full ">
      <Title />
      <MainImg />
    </div>
  );
};

export default Hero;
