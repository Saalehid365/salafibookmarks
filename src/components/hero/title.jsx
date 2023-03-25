import React from "react";
import TitleText from "./titleText";

const Title = () => {
  return (
    <div className=" text-start pb-44 pt-32 absolute text-white">
      <p className="text-4xl">Welcome To </p>
      <p className="text-8xl font-bold">Salafi Bookmarks</p>
      <TitleText />
    </div>
  );
};

export default Title;
