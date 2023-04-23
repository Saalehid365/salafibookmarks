import React from "react";
import Googlemap from "../components/googlemap";
import Footer from "../mains/footer";
import Newsletter from "../mains/newsletter";
import Quote from "../mains/quote";
import MainHero from "../mains/main";
import Topsels from "../mains/topsels";
import Quote1 from "../mains/quote1";

const Home = () => {
  return (
    <div>
      <MainHero />
      <Quote />
      <Quote1 />
      <Topsels />
      <Newsletter />
      <Googlemap />
      <Footer />
    </div>
  );
};

export default Home;
