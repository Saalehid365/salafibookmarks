import React from "react";
import LessonsCard from "../components/lessons";

const Events = () => {
  return (
    <div className="bg-library1 bg-no-repeat bg-cover bg-bottom py-12 flex flex-col justify-between h-full">
      <p className="text-white text-3xl font-bold mb-4">Upcoming Lessons</p>
      <p className="text-white">
        here are some of the upcoming salafi lectures from the various maraakiz
        in the United Kingdom
      </p>
      <LessonsCard />
    </div>
  );
};

export default Events;
