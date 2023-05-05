import React from "react";
import book from "../assets/book12.avif";

const About = () => {
  return (
    <div className="bg-gray-200 h-[70vh] pt-28 font-serif sm:pt-4">
      <h2 className="text-3xl sm:text-lg">
        Meet your bookmark maker specialist
      </h2>
      <div className="flex justify-evenly items-center mt-12 sm:flex-col sm:p-4 sm:bg-gray-200 sm:items-start sm:mt-0 ">
        <div className="w-1/3 flex flex-col justify-evenly h-96 items-start sm:w-full sm:h-72 sm:px-4">
          <h3 className="text-5xl sm:text-2xl">Our Story</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolores ducimus fuga fugit, vero totam!
          </p>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolores ducimus fuga fugit, vero totam!
          </p>
        </div>
        <div>
          <img alt="bookbg" src={book} className="h-72 w-96 rounded"></img>
        </div>
      </div>
      <div className="h-72 bg-axolotl flex flex-col justify-evenly items-center text-gray-300 ">
        <h2 className="text-3xl">Our products are sold in: </h2>
        <div className="flex justify-between w-3/4 sm:flex-col sm:items-center">
          <h3 className="text-4xl font-mono text-start sm:text-center sm:text-2xl">
            Salafi Bookstore
          </h3>
          <h3 className="text-4xl font-serif sm:text-2xl">Darussalam</h3>
          <h3 className="text-3xl font-mono text-end sm:text-center sm:text-2xl">
            Ibrahim books(USA)
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
