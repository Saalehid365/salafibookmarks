import React from "react";

const Title = ({ timeline, ease }) => {
  return (
    <div className=" text-start pb-44 pt-32  text-white">
      <p className="text-4xl">Welcome To </p>
      <p className="text-8xl font-bold">Salafi Bookmarks</p>
      <div className=" text-2xl text-white">
        <p>No more folding pages</p>
        <p>Bookmark your page with a quality bookmark</p>
        <button className="border w-44 mt-8 rounded-lg h-12">Shop now</button>
      </div>
    </div>
  );
};

export default Title;
