import React from "react";
import Feature1 from "../mains/feature1";
import Features from "../mains/features";
import Hero from "../mains/hero";
import Imageleft from "../mains/imageleft";
import ImageRight from "../mains/imageright";
import Quote from "../mains/quote";
import Topsellers from "../mains/topsellers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Imageleft />
      <Quote />
      <ImageRight />
      <Topsellers />
      <Feature1 />
    </div>
  );
};

export default Home;
