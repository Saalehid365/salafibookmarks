import React from "react";
import Feedback from "../components/features/feedback";
import WhatweCard from "../components/features/whatwe";

const Features = () => {
  return (
    <div className="w-full px-20 h-full py-28 flex items-center justify-evenly">
      <Feedback />
      <div className="flex justify-evenly w-2/3 h-96 items-center">
        <WhatweCard
          order1={"01"}
          order2={"Design"}
          order3={"We design all bookmarks"}
        />
        <WhatweCard
          order1={"02"}
          order2={"Source"}
          order3={"We source all materials"}
        />
        <WhatweCard
          order1={"03"}
          order2={"Shipping"}
          order3={"We ship worldwide"}
        />
      </div>
    </div>
  );
};

export default Features;
