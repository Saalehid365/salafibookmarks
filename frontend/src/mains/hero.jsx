import React from "react";
import MainImg from "../components/hero/mainImg";
import Title from "../components/hero/title";
import { gsap, Power3 } from "gsap";

const Hero = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeInOut;
  return (
    <div className="flex justify-center items-center h-[80vh] mt-20 w-full ">
      <Title timeline={tl} ease={ease} />
      <MainImg />
    </div>
  );
};

export default Hero;
