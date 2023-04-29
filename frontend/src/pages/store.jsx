import React from "react";
import Filtermenu from "../store/filtermenu";
import Storegrid from "../store/storegrid";
import Storehero from "../store/storehero";

const Store = () => {
  return (
    <div
      className="sm:pt-24
    "
    >
      <div>
        <Storehero />
      </div>
      <div className="flex sm:flex-col">
        <Filtermenu />
        <Storegrid />
      </div>
    </div>
  );
};

export default Store;
