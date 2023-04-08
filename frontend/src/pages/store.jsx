import React from "react";
import Filtermenu from "../store/filtermenu";
import Storegrid from "../store/storegrid";
import Storehero from "../store/storehero";

const Store = () => {
  return (
    <div>
      <div>
        <Storehero />
      </div>
      <div className="flex">
        <Filtermenu />
        <Storegrid />
      </div>
    </div>
  );
};

export default Store;
