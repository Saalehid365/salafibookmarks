import React from "react";
import Feedback from "../components/features/feedback";
import WhatweCard from "../components/features/whatwe";

const Features = () => {
  return (
    <div className="w-full px-20 h-full  flex items-center justify-evenly">
      <Feedback />
      <div className="flex justify-evenly w-2/3 h-96 items-center">
        <WhatweCard />
        <WhatweCard />
        <WhatweCard />
      </div>
    </div>
  );
};

export default Features;
