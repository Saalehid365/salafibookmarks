import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="hidden h-96  sm:pt-6 sm:flex sm:flex-col items-center justify-evenly text-heavyMetal">
      <h2 className="text-3xl">Our Products</h2>
      <p className="w-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        dignissimos nulla totam laudantium error, voluptatem voluptatibus nam
        labore nesciunt ex aspernatur perspiciatis deserunt incidunt adipisci
        possimus suscipit impedit optio. Laboriosam?
      </p>

      <Link>
        <button className="border w-32 p-2 bg-axolotl text-white">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Services;
