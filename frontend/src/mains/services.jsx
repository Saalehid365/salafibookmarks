import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=" h-96 bg-gray-300 flex flex-col items-center justify-evenly sm:pt-6 sm:flex sm:flex-col sm:items-center  text-heavyMetal">
      <h2 className="text-3xl">Our Products</h2>
      <p className="sm:w-72">
        They are made to aid the student in 3 things 1.keeping their books in
        good condition 2.making it easier to find the page you left 3. reminding
        you about the benefit of knowledge
      </p>

      <Link className="">
        <button className="border-none rounded w-32 p-2 bg-axolotl text-white">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Services;
