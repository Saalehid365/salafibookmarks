import React, { useContext } from "react";
import { bookmarks } from "../bookmarks";
import Shopcard from "./shopcard";
import { ShopContext } from "../shop-context";
import Topsels from "../mains/topsels";
import Topsellercard from "../mains/topsellercqrd";

const Storegrid = () => {
  const filterSearch = useContext(ShopContext);
  const { filter, setFilter } = filterSearch;
  return (
    <div className=" w-full grid grid-rows-2 grid-cols-4 gap-4 px-6 py-12 ">
      {bookmarks
        .filter((item) => {
          return filter.toLowerCase() === " "
            ? item
            : item.Color.toLowerCase().includes(filter);
        })
        .map((product, index) => (
          <Topsellercard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Storegrid;
