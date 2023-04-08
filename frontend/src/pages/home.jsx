import React from "react";
import Googlemap from "../components/googlemap";
import Features from "../mains/features";
import Footer from "../mains/footer";
import Hero from "../mains/hero";
import Imageleft from "../mains/imageleft";
import ImageRight from "../mains/imageright";
import Newsletter from "../mains/newsletter";
import Quote from "../mains/quote";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Imageleft />
      <Quote />
      <ImageRight />
      <Newsletter />

      <Googlemap />
      <Footer />
    </div>
  );
};

export default Home;
