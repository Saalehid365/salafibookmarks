import { Timeline } from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import TitleText from "./titleText";

const Title = ({ timeline, ease }) => {
  const welcome = useRef(null);
  const salafiBook = useRef(null);

  return (
    <div className=" text-start pb-44 pt-32 absolute text-white">
      <p className="text-4xl">Welcome To </p>
      <p className="text-8xl font-bold">Salafi Bookmarks</p>
      <TitleText />
    </div>
  );
};

export default Title;
