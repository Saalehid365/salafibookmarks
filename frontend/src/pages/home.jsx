import React, { useContext } from "react";
import Googlemap from "../components/googlemap";
import Footer from "../mains/footer";
import Newsletter from "../mains/newsletter";
import Quote from "../mains/quote";
import MainHero from "../mains/main";
import Topsels from "../mains/topsels";
import Quote1 from "../mains/quote1";
import Dropdown from "../mains/dropdown";
import { ShopContext } from "../shop-context";
import Services from "../mains/services";
import Slider from "../mains/slider";

const Home = () => {
  const toggleHamburger = useContext(ShopContext);
  const { toggleHam } = toggleHamburger;

  return (
    <div>
      {toggleHam && <Dropdown />}
      <MainHero />
      <Services />
      <Slider />
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
