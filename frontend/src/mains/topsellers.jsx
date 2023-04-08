import React from "react";
import { bookmarks } from "../bookmarks";
import Sellercard from "../components/features/sellercard";

const Topsellers = () => {
  return (
    <div className=" flex justify-center py-40 flex-col">
      <p className="text-4xl font-bold"> Top Sellers</p>
      <div className="pt-24">
        <div className="flex justify-evenly w-full">
          {bookmarks.map((card) => (
            <Sellercard
              key={card.id}
              quote={card.Quote}
              color={card.Color}
              price={card.Price}
              author={card.Author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topsellers;
