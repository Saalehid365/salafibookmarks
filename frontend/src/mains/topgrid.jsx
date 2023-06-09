import React from "react";
import { bookmarks } from "../bookmarks";
import Shopcard from "../store/shopcard";
import Topsellercard from "./topsellercqrd";

const Topgrid = () => {
  const topsellers = bookmarks.filter((toptier) => toptier.topseller === "yes");

  return (
    <div className=" grid row-span-1 grid-cols-4 ml-24 sm:grid sm:row-span-2 sm:grid-cols-2 sm:gap-2 sm:mx-2">
      {topsellers.map((product) => (
        <Topsellercard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Topgrid;
